(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42760,e=>{"use strict";function t(e,t){return!function e(t,{operations:r,inputs:n}){switch(t.kind){case"input":if(!(t.name in n))throw Error(`Unknown expression input '${t.name}'`);return;case"literal":if(Array.isArray(t.value)){for(let e of t.value)if(!Number.isFinite(e))throw Error(`Expression literal array must contain only finite values, got ${e}`)}else if(!Number.isFinite(t.value))throw Error(`Expression literal must be finite, got ${t.value}`);return;case"call":{let i=r[t.op];if(!i)throw Error(`Unknown expression op '${t.op}'`);if(t.args.length!==i.arity)throw Error(`Expression op '${t.op}' expects ${i.arity} args, got ${t.args.length}`);for(let i of t.args)e(i,{operations:r,inputs:n});return}default:throw Error(`Unsupported expression node ${t.kind}`)}}(e,t),function e(t,r){switch(t.kind){case"input":{let e=r.inputs[t.name];if(r.laneIndex<e.size)return r.formatInput(t.name);return r.formatOutOfBoundsInput(t.name)}case"literal":return r.formatLiteral(t.value);case"call":{let n=r.operations[t.op],i=t.args.map(t=>e(t,r));return r.formatCall(n.symbol,i)}default:throw Error(`Unsupported expression node ${t.kind}`)}}(e,t)}e.s(["compileExpression",()=>t])},93915,e=>{"use strict";var t=e.i(18342),r=e.i(42760),n=e.i(14152),i=e.i(11662),u=e.i(13642);let a=`fn arithmetic_add(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x + y;
}

fn arithmetic_subtract(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x - y;
}

fn arithmetic_multiply(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x * y;
}

fn arithmetic_divide(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x / y;
}

fn arithmetic_tan(x: f32) -> f32 {
  return tan_fp32(x);
}
`,o=`\
fn row_dot(x: array<{TYPE}, {X_LEN}>, y: array<{TYPE}, {Y_LEN}>) -> array<f32, 1> {
  var sum = 0.0;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    sum += f32(x[i]) * f32(y[i]);
  }
  return array<f32, 1>(sum);
}
`,s=`\
fn equalAll(x: array<{TYPE}, {X_LEN}>, y: array<{TYPE}, {Y_LEN}>) -> array<u32, 1> {
  var allEqual = 1u;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    if (x[i] != y[i]) {
      allEqual = 0u;
      break;
    }
  }
  return array<u32, 1>(allEqual);
}
`;var l=e.i(11656),d=e.i(62799),f=e.i(5552),p=e.i(7310);function c(e,t,r){let n=(0,u.getWGSLType)(t.type);return`@group(0) @binding(${r}) var<storage, read> ${e}: array<${n}>;`}function g(e,t,r,n=e){let i=(0,u.getWGSLType)(r);if(t.isConstant){let e=t.value;if(!e)throw Error(`Constant input ${t} is missing CPU values`);return`fn read_${n}(_sourceIndex: u32) -> array<${i}, ${t.size}> {
  return array<${i}, ${t.size}>(${Array.from({length:t.size},(t,r)=>(0,u.getLiteralValue)(i,e[r]??0)).join(", ")});
}`}let a=t.stride/t.ValueType.BYTES_PER_ELEMENT,o=t.offset/t.ValueType.BYTES_PER_ELEMENT,s=(0,u.getWGSLType)(t.type)===i?"":`${i}`;return`fn read_${n}(sourceIndex: u32) -> array<${i}, ${t.size}> {
  var value: array<${i}, ${t.size}>;
  let rowOffset = ${o}u + sourceIndex * ${a}u;
${Array.from({length:t.size},(t,r)=>s?`  value[${r}] = ${s}(${e}[rowOffset + ${r}u]);`:`  value[${r}] = ${e}[rowOffset + ${r}u];`).join("\n")}
  return value;
}`}function x(e,t){return g("sourceValues",e,t,"source_values")}function m(e,t){let r=(0,u.getWGSLType)(e.type);return`@group(0) @binding(${t}) var<storage, read_write> result: array<${r}>;`}function h(e){let t=e.stride/e.ValueType.BYTES_PER_ELEMENT,r=e.offset/e.ValueType.BYTES_PER_ELEMENT,n=(0,u.getWGSLType)(e.type);return`fn write_result(rowIndex: u32, value: array<${n}, ${e.size}>) {
  let rowOffset = ${r}u + rowIndex * ${t}u;
${Array.from({length:e.size},(e,t)=>`  result[rowOffset + ${t}u] = value[${t}];`).join("\n")}
}`}let y=`\
const LE: bool = ${new Uint8Array(new Uint16Array([255]).buffer)[0]>0?"true":"false"};
const F32_NAN: u32 = 0xffffffffu;
const F32_INF: u32 = 0x7f800000u;

fn roundShiftRight(value: u32, shift: i32) -> u32 {
  if (shift <= 0) {
    return value << u32(-shift);
  }

  if (shift >= 32) {
    if (shift == 32 && value > 0x80000000u) {
      return 1u;
    }
    return 0u;
  }

  let shiftU32 = u32(shift);
  let truncated = value >> shiftU32;
  let halfShift = 1u << u32(shift - 1);
  let remainder = value & ((1u << shiftU32) - 1u);
  if (remainder > halfShift || (remainder == halfShift && (truncated & 1u) == 1u)) {
    return truncated + 1u;
  }
  return truncated;
}

fn makeFloatImmediate(sign: u32, exponent: i32, mantissa: u32) -> u32 {
  return (sign << 31u) | (u32(exponent + 127) << 23u) | (mantissa & 0x7fffffu);
}

fn makeFloat(sign: u32, exponent: i32, significand: u32) -> u32 {
  if (significand == 0u) {
    return sign << 31u;
  }

  let leadingZeros = i32(countLeadingZeros(significand));
  var normalizedExponent = exponent + 31 - leadingZeros;

  if (normalizedExponent > 127) {
    return (sign << 31u) | F32_INF;
  }

  var mantissa: u32;
  if (normalizedExponent >= -126) {
    mantissa = roundShiftRight(significand, 8 - leadingZeros);
    if (mantissa >= 0x1000000u) {
      mantissa = mantissa >> 1u;
      normalizedExponent += 1;
      if (normalizedExponent > 127) {
        return (sign << 31u) | F32_INF;
      }
    }
    return makeFloatImmediate(sign, normalizedExponent, mantissa);
  }

  let subnormalShift = -149 - exponent;
  mantissa = roundShiftRight(significand, subnormalShift);
  if (mantissa >= 0x800000u) {
    return (sign << 31u) | (1u << 23u);
  }
  return (sign << 31u) | mantissa;
}

fn parseAsDouble(words: vec2<u32>) -> vec2<u32> {
  var d = words;
  if (LE) {
    d = d.yx;
  }

  let sign = (d.x >> 31u) & 1u;
  let exponentBits = (d.x >> 20u) & 0x7ffu;
  let exponent = i32(exponentBits) - 1023;
  let fractionHigh = d.x & 0xfffffu;
  let fractionLow = d.y;

  if (exponentBits == 0x7ffu) {
    if (fractionHigh == 0u && fractionLow == 0u) {
      return vec2<u32>((sign << 31u) | F32_INF, F32_NAN);
    }
    return vec2<u32>(F32_NAN);
  }

  if (exponentBits == 0u) {
    return vec2<u32>(sign << 31u);
  }

  if (exponent > 127) {
    return vec2<u32>((sign << 31u) | F32_INF, ((1u - sign) << 31u) | F32_INF);
  }

  let highSignificand = 0x800000u | (fractionHigh << 3u) | (fractionLow >> 29u);
  let lowSignificand = fractionLow & 0x1fffffffu;

  if (exponent < -126) {
    let highPart = makeFloat(sign, exponent - 23, highSignificand);
    let lowPart = makeFloat(sign, exponent - 52, lowSignificand);
    return vec2<u32>(highPart, lowPart);
  }

  let roundUp = lowSignificand > 0x10000000u ||
    (lowSignificand == 0x10000000u && (highSignificand & 1u) == 1u);

  var roundedSignificand = highSignificand + select(0u, 1u, roundUp);
  var highExponent = exponent;
  if (roundedSignificand == 0x1000000u) {
    roundedSignificand = 0x800000u;
    highExponent += 1;
  }

  if (highExponent > 127) {
    return vec2<u32>((sign << 31u) | F32_INF, ((1u - sign) << 31u) | F32_INF);
  }

  let highPart = makeFloatImmediate(sign, highExponent, roundedSignificand);

  var remainder = i32(lowSignificand);
  var lowSign = sign;
  if (roundUp) {
    remainder -= 0x20000000;
  }
  if (remainder < 0) {
    lowSign = 1u - sign;
    remainder = -remainder;
  }

  let lowPart = makeFloat(lowSign, exponent - 52, u32(remainder));
  return vec2<u32>(highPart, lowPart);
}

fn fround(x: array<u32, {X_LEN}>) -> array<f32, {RESULT_LEN}> {
  var result: array<f32, {RESULT_LEN}>;
  let n = {X_LEN}u / 2u;
  for (var i = 0u; i < n; i = i + 1u) {
    let parts = parseAsDouble(vec2<u32>(x[i * 2u], x[i * 2u + 1u]));
    result[i] = bitcast<f32>(parts.x);
    result[i + n] = bitcast<f32>(parts.y);
  }
  return result;
}
`,w=async({inputs:e,output:t,target:r})=>{var n,i,a,o,s,d;let f,g,y,{ids:w,sourceValues:$}=e,v=(0,u.getWGSLType)(w.type),E=[];w.isConstant||E.push({name:"ids",input:w,index:E.length}),$.isConstant||E.push({name:"sourceValues",input:$,index:E.length});let I=(0,p.getWebGPUDispatchLayout)(Math.ceil(t.length/64),r.device.limits.maxComputeWorkgroupsPerDimension),_=`
${E.map(({name:e,input:t,index:r})=>c(e,t,r)).join("\n")}
${function(e,t){if(e.isConstant){let r=e.value;if(!r)throw Error(`Constant input ${e} is missing CPU values`);return`fn read_ids(_rowIndex: u32) -> ${t} {
  return ${(0,u.getLiteralValue)(t,r[0]??0)};
}`}let r=e.stride/e.ValueType.BYTES_PER_ELEMENT,n=e.offset/e.ValueType.BYTES_PER_ELEMENT;return`fn read_ids(rowIndex: u32) -> ${t} {
  let rowOffset = ${n}u + rowIndex * ${r}u;
  return ids[rowOffset];
}`}(w,v)}
${x($,t.type)}
${m(t,E.length)}
${h(t)}
${(n=t.type,i=t.size,y=(0,u.getZeroValue)(n),`fn zero_result() -> array<${(0,u.getWGSLType)(n)}, ${i}> {
  var result: array<${(0,u.getWGSLType)(n)}, ${i}>;
${Array.from({length:i},(e,t)=>`  result[${t}] = ${y};`).join("\n")}
  return result;
}`)}
${(a=w.type,o=t.type,s=t.size,d=$.length,f=(0,u.getWGSLType)(a),g=(0,u.getWGSLType)(o),`fn gather(idsValue: ${f}) -> array<${g}, ${s}> {
  let sourceIndex = ${"u32"===f?"i32(idsValue)":"i32"===f?"idsValue":"i32(idsValue)"};
  if (sourceIndex < 0 || sourceIndex >= ${d}) {
    return zero_result();
  }
  return read_source_values(u32(sourceIndex));
}`)}

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${(0,p.getWebGPUDispatchRowIndex)(I,64)};
  if (rowIndex >= ${t.length}u) {
    return;
  }

  let idsValue = read_ids(rowIndex);
  let result = gather(idsValue);
  write_result(rowIndex, result);
}
`,T=new l.Computation(r.device,{source:_,shaderLayout:{bindings:[...E.map(({name:e,index:t})=>({name:e,type:"storage",group:0,location:t})),{name:"result",type:"storage",group:0,location:E.length}]}}),b={};w.isConstant||(b.ids=w.buffer),$.isConstant||(b.sourceValues=$.buffer),b.result=r,T.setBindings(b);let P=r.device.beginComputePass({});return T.dispatch(P,I.x,I.y,I.z),P.end(),r.device.submit(),T.destroy(),{success:!0}},$=async({inputs:e,output:t,target:r})=>{var n;let{segments:i}=e,u=i.isConstant?[]:[{name:"segments",input:i,index:0}],a=(0,p.getWebGPUDispatchLayout)(Math.ceil(t.length/64),r.device.limits.maxComputeWorkgroupsPerDimension),o=`
${u.map(({name:e,input:t,index:r})=>c(e,t,r)).join("\n")}
${g("segments",i,"uint32")}
${m(t,u.length)}
${h(t)}
${(n=i.length,`fn segmented_map(vertexIndex: u32) -> array<u32, 2> {
  var low = 0i;
  var high = ${n}i;
  while (low < high) {
    let mid = low + (high - low) / 2i;
    let midStart = read_segments(u32(mid))[0];
    if (midStart <= vertexIndex) {
      low = mid + 1i;
    } else {
      high = mid;
    }
  }

  let segmentIndex = u32(max(low - 1i, 0i));
  let segmentStart = read_segments(segmentIndex)[0];
  return array<u32, 2>(segmentIndex, vertexIndex - segmentStart);
}`)}

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${(0,p.getWebGPUDispatchRowIndex)(a,64)};
  if (rowIndex >= ${t.length}u) {
    return;
  }

  let result = segmented_map(rowIndex);
  write_result(rowIndex, result);
}
`,s=new l.Computation(r.device,{source:o,shaderLayout:{bindings:[...u.map(({name:e,index:t})=>({name:e,type:"storage",group:0,location:t})),{name:"result",type:"storage",group:0,location:u.length}]}}),d=Object.fromEntries(u.map(({name:e,input:t})=>[e,t.buffer]));d.result=r,s.setBindings(d);let f=r.device.beginComputePass({});return s.dispatch(f,a.x,a.y,a.z),f.end(),r.device.submit(),s.destroy(),{success:!0}};var v=e.i(93539);let E=`\
fn row_length(x: array<{TYPE}, {X_LEN}>) -> array<f32, 1> {
  var sum = 0.0;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    sum += f32(x[i]) * f32(x[i]);
  }
  return array<f32, 1>(sqrt(sum));
}
`,I=async({inputs:e,output:t,target:r})=>{let n=(0,u.getZeroValue)(t.type);return(0,i.runRowComputation)({module:{name:"select",source:"// inline expression select\n"},inputs:e,output:t,operationType:t.type,outputBuffer:r,expression:t=>{let r=_("condition",e.condition,t,n),i=_("whenTrue",e.whenTrue,t,n),u=_("whenFalse",e.whenFalse,t,n);return`select(${u}, ${i}, ${r} != ${n})`}}),{success:!0}};function _(e,t,r,n){return r<t.size?`${e}[${r}]`:1===t.size?`${e}[0]`:n}e.s([],65693),e.i(65693),e.s(["arithmetic",0,({inputs:e,output:o,target:s})=>{let l=o.type,d=(0,u.getWGSLType)(l),f=(0,u.getZeroValue)(l),p=e.namedInputs;return(0,i.runRowComputation)({module:{name:"arithmetic",source:a,dependencies:[t.fp32]},inputs:p,output:o,operationType:l,outputBuffer:s,expression:t=>(0,r.compileExpression)(e.expression,{operations:n.ARITHMETIC_OPERATIONS,inputs:p,laneIndex:t,formatInput:e=>`${e}[${t}]`,formatOutOfBoundsInput:e=>1===p[e].size?`${e}[0]`:f,formatLiteral:e=>{let r=Array.isArray(e)?e[t]??0:e;return`${d}(${(0,u.formatLiteralValue)(l,r)})`},formatCall:(e,t)=>`${e}(${t.join(", ")})`})}),{success:!0}},"dot",0,({inputs:e,output:t,target:r})=>((0,i.runRowComputation)({module:{name:"row_dot",source:o},inputs:e,output:t,operationType:"float32",outputBuffer:r}),{success:!0}),"equalAll",0,({inputs:e,output:t,target:r})=>((0,i.runRowComputation)({module:{name:"equalAll",source:s},inputs:e,output:t,operationType:e.x.type,outputBuffer:r}),{success:!0}),"extent",0,({inputs:e,output:t,target:r})=>{let{sourceValues:n}=e;if(0===n.length){let e=new t.ValueType(t.length*t.size);return r.write(e),{success:!0,value:e}}if(n.isConstant){let e=n.value;if(!e)throw Error(`Constant input ${n} is missing CPU values`);let i=new t.ValueType(t.length*t.size);for(let r=0;r<t.length;r++){let t=e[r];i[2*r]=t,i[2*r+1]=t}return r.write(i),{success:!0,value:i}}let i=[],a=n,o="raw",s=n.length;try{for(;;){let e=Math.ceil(s/64),n=t.length*e,g=1===e?r:f.bufferPool.createOrReuse(r.device,n*t.stride);if(e>1&&i.push(g),function({input:e,inputMode:t,inputGroupCount:r,channelCount:n,outputType:i,outputBuffer:a,outputLength:o,outputStride:s,outputOffset:f}){let g=(0,u.getWGSLType)(i),y=(0,p.getWebGPUDispatchLayout)(o,a.device.limits.maxComputeWorkgroupsPerDimension),w=new d.GPUDataEvaluator({buffer:a,type:i,size:2,length:o,stride:s,offset:f}),$=`
${e.isConstant?"":c("sourceValues",e,0)}
${x(e,i)}
${m(w,+!e.isConstant)}
${h(w)}
${function(e,t,r,n){let i=(0,u.getWGSLType)(t),[a,o]=function(e){switch(e){case"uint32":return["0xffffffffu","0u"];case"sint32":return["2147483647","-2147483648"];case"float32":return["3.402823e38","-3.402823e38"];default:throw Error(`Unsupported WebGPU extent type for ${e}`)}}(t);return"raw"===e?`fn extent_pass(channelIndex: u32, inputGroupIndex: u32) -> array<${i}, 2> {
  var result: array<${i}, 2>;
  result[0] = ${a};
  result[1] = ${o};

  if (inputGroupIndex < ${n}u) {
    let value = read_source_values(inputGroupIndex);
    result[0] = value[channelIndex];
    result[1] = value[channelIndex];
  }

  return result;
}`:`fn extent_pass(channelIndex: u32, inputGroupIndex: u32) -> array<${i}, 2> {
  var result: array<${i}, 2>;
  result[0] = ${a};
  result[1] = ${o};

  if (inputGroupIndex < ${n}u) {
    let rowIndex = inputGroupIndex * ${r}u + channelIndex;
    let value = read_source_values(rowIndex);
    result[0] = value[0];
    result[1] = value[1];
  }

  return result;
}`}(t,i,n,r)}

var<workgroup> sharedMin: array<${g}, 64>;
var<workgroup> sharedMax: array<${g}, 64>;

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let outputRowIndex = ${(0,p.getWebGPUDispatchWorkgroupIndex)(y)};
  if (outputRowIndex >= ${o}u) {
    return;
  }

  let channelIndex = outputRowIndex % ${n}u;
  let outputGroupIndex = outputRowIndex / ${n}u;
  let inputGroupIndex = outputGroupIndex * 64u + localId.x;

  let result = extent_pass(channelIndex, inputGroupIndex);
  sharedMin[localId.x] = result[0];
  sharedMax[localId.x] = result[1];
  workgroupBarrier();

  var stride = ${Math.floor(32)}u;
  loop {
    if (stride == 0u) {
      break;
    }
    if (localId.x < stride) {
      let compareIndex = localId.x + stride;
      if (sharedMin[compareIndex] < sharedMin[localId.x]) {
        sharedMin[localId.x] = sharedMin[compareIndex];
      }
      if (sharedMax[compareIndex] > sharedMax[localId.x]) {
        sharedMax[localId.x] = sharedMax[compareIndex];
      }
    }
    workgroupBarrier();
    stride = stride / 2u;
  }

  if (localId.x == 0u) {
    write_result(outputRowIndex, array<${g}, 2>(sharedMin[0], sharedMax[0]));
  }
}
`,v=new l.Computation(a.device,{source:$,shaderLayout:{bindings:[...e.isConstant?[]:[{name:"sourceValues",type:"storage",group:0,location:0}],{name:"result",type:"storage",group:0,location:+!e.isConstant}]}}),E={result:a};e.isConstant||(E.sourceValues=e.buffer),v.setBindings(E);let I=a.device.beginComputePass({});v.dispatch(I,y.x,y.y,y.z),I.end(),a.device.submit(),v.destroy()}({input:a,inputMode:o,inputGroupCount:s,channelCount:t.length,outputType:t.type,outputBuffer:g,outputLength:n,outputStride:t.stride,outputOffset:t.offset}),1===e)break;a=new d.GPUDataEvaluator({buffer:g,type:t.type,size:2,length:n}),o="partial",s=e}return{success:!0}}finally{for(let e of i)f.bufferPool.recycle(e)}},"fround",0,({inputs:e,output:t,target:r})=>((0,i.runRowComputation)({module:{name:"fround",source:y},inputs:e,output:t,operationType:"uint32",outputBuffer:r}),{success:!0}),"gather",0,w,"interleave",()=>v.interleave,"length",0,({inputs:e,output:t,target:r})=>((0,i.runRowComputation)({module:{name:"row_length",source:E},inputs:e,output:t,operationType:"float32",outputBuffer:r}),{success:!0}),"segmentedMap",0,$,"select",0,I,"sequence",0,({inputs:e,output:t,target:r})=>{let n=(0,p.getWebGPUDispatchLayout)(Math.ceil(t.length/64),r.device.limits.maxComputeWorkgroupsPerDimension),i=`\
@group(0) @binding(0) var<storage, read_write> result: array<i32>;

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${(0,p.getWebGPUDispatchRowIndex)(n,64)};
  if (rowIndex >= ${t.length}u) {
    return;
  }

  let rowOffset = ${t.offset/t.ValueType.BYTES_PER_ELEMENT}u + rowIndex * ${t.stride/t.ValueType.BYTES_PER_ELEMENT}u;
  result[rowOffset] = ${e.start} + i32(rowIndex) * ${e.step};
}
`,u=new l.Computation(r.device,{source:i,shaderLayout:{bindings:[{name:"result",type:"storage",group:0,location:0}]}});u.setBindings({result:r});let a=r.device.beginComputePass({});return u.dispatch(a,n.x,n.y,n.z),a.end(),r.device.submit(),u.destroy(),{success:!0}},"swizzle",0,({inputs:e,output:t,target:r})=>{let{columns:n}=e;return(0,i.runRowComputation)({module:{name:"swizzle",source:"// swizzle expression handled inline"},expression:e=>`x[${n[e]}]`,inputs:{x:e.x},output:t,outputBuffer:r}),{success:!0}}],93915)}]);