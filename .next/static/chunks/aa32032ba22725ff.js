(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42760,e=>{"use strict";function t(e,t){return!function e(t,{operations:n,inputs:r}){switch(t.kind){case"input":if(!(t.name in r))throw Error(`Unknown expression input '${t.name}'`);return;case"literal":if(Array.isArray(t.value)){for(let e of t.value)if(!Number.isFinite(e))throw Error(`Expression literal array must contain only finite values, got ${e}`)}else if(!Number.isFinite(t.value))throw Error(`Expression literal must be finite, got ${t.value}`);return;case"call":{let i=n[t.op];if(!i)throw Error(`Unknown expression op '${t.op}'`);if(t.args.length!==i.arity)throw Error(`Expression op '${t.op}' expects ${i.arity} args, got ${t.args.length}`);for(let i of t.args)e(i,{operations:n,inputs:r});return}default:throw Error(`Unsupported expression node ${t.kind}`)}}(e,t),function e(t,n){switch(t.kind){case"input":{let e=n.inputs[t.name];if(n.laneIndex<e.size)return n.formatInput(t.name);return n.formatOutOfBoundsInput(t.name)}case"literal":return n.formatLiteral(t.value);case"call":{let r=n.operations[t.op],i=t.args.map(t=>e(t,n));return n.formatCall(r.symbol,i)}default:throw Error(`Unsupported expression node ${t.kind}`)}}(e,t)}e.s(["compileExpression",()=>t])},70897,e=>{"use strict";var t=e.i(18342),n=e.i(42760),r=e.i(14152),i=e.i(43317),s=e.i(96875),u=e.i(62799),a=e.i(5552);function o(e,t,n=!1){if(n)return 1===t?"float":`vec${t}`;switch(e){case"uint8":case"uint16":case"uint32":return 1===t?"uint":`uvec${t}`;case"sint8":case"sint16":case"sint32":return 1===t?"int":`ivec${t}`;default:return 1===t?"float":`vec${t}`}}function l(e,t,n=!1){let r;if(n)switch(e){case"uint8":r="unorm8";break;case"sint8":r="snorm8";break;case"uint16":r="unorm16";break;case"sint16":r="snorm16";break;case"float32":r="float32";break;default:throw Error(`Unsupported normalized vertex format for ${e}`)}else r=e;return 1===t?r:3!==t||r.startsWith("float32")||r.endsWith("32")?`${r}x${t}`:`${r}x3-webgl`}function f(e){switch(e[0]){case"u":return"0u";case"s":return"0";default:return"0."}}let d=new s.GLSLShaderAssembler;function c({module:e,elementWise:t=!1,expression:n,inputs:r,output:s,operationType:l=s.type,outputBuffer:c}){var h;let _=c.device,x=g("result",s.type,s.size,s.normalized),v=[e,x],E=[],y={},$=o(s.type,1,s.normalized),b=o(l,1,s.normalized),T="",w=null,S={TYPE:b,RESULT_LEN:s.size.toString()},z=Array.isArray(h=r)?h.map((e,t)=>[`x${t}`,e]):Object.entries(h);for(let[e,t]of z)v.push(p(e,t.type,t.size,t.normalized,l)),E.push(m(e,t)),t instanceof u.GPUDataEvaluator?y[e]=t.buffer:(w=w||a.bufferPool.createOrReuse(_,c.byteLength),y[e]=w),T+=`TYPE ${e}[${t.size}]; get_${e}(${e});
`,S[`${e.toUpperCase()}_LEN`]=t.size.toString();let P="";if(n)for(let e=0;e<s.size;e++)P+=`result[${e}]=${n(e)};
`;else if(t)for(let t=0;t<s.size;t++){let n=f(b),r=z.map(([e,r])=>t<r.size?`${e}[${t}]`:n);P+=`result[${t}]=${e.name}(${r.join(", ")});
`}else P=`${e.name}(${z.map(([e])=>e).join(", ")}, result);`;let L=`\
#version 300 es

void main() {
${T}
${$} result[${s.size}];
${P}
set_result(result);
}
  `,N=new i.BufferTransform(_,{vs:L,shaderAssembler:d,defines:S,modules:v,bufferLayout:E,vertexCount:1,instanceCount:s.length,attributes:y,feedbackBufferMode:"interleaved",outputs:x.varyings});_.statsManager.getStats("GPGPU Operation Counts").get("Transform Runs").incrementCount(),N.run({inputBuffers:y,outputBuffers:{[x.varyings[0]]:0===s.offset?c:{buffer:c,byteOffset:s.offset,byteLength:s.byteLength}}}),w&&a.bufferPool.recycle(w)}function p(e,t,n,r=!1,i=t){let s="",u="";for(let a=0;a<n;a+=4){let l=Math.min(n-a,4),f=o(t,l,r);s+=`in ${f} a${e}_${a};
`;for(let n=0;n<l;n++){let s=`a${e}_${a}`;l>1&&(s=`${s}[${n}]`),(r||t!==i)&&(s=`TYPE(${s})`),u+=`v[${a+n}]=${s};
`}}let a=`
${s}
void get_${e}(out TYPE v[${n}]) {
  ${u}
}
`;return{name:e,vs:a}}function m(e,t){let n={name:e,stepMode:t.isConstant?"vertex":"instance",byteStride:t.stride,attributes:[]};for(let r=0;r<t.size;r+=4){let i=Math.min(t.size-r,4);n.attributes.push({attribute:`a${e}_${r}`,format:l(t.type,i,t.normalized),byteOffset:t.offset+t.ValueType.BYTES_PER_ELEMENT*r})}return n}function g(e,t,n,r=!1){let i=[],s=o(t,1,r),u="",a="";for(let s=0;s<n;s+=4){let l=Math.min(n-s,4),f=o(t,l,r);i.push(`${e}_${s}`),u+=`flat out ${f} ${e}_${s};
`;let d=Array.from({length:l},(e,t)=>s+t);a+=`${e}_${s} = ${f}(${d.map(e=>`v[${e}]`).join(",")});
`}return{name:e,varyings:i,vs:`
${u}
void set_${e}(in ${s} v[${n}]) {
  ${a}
}
`}}let h=`\
TYPE arithmetic_add(TYPE x, TYPE y) {
  return x + y;
}

TYPE arithmetic_subtract(TYPE x, TYPE y) {
  return x - y;
}

TYPE arithmetic_multiply(TYPE x, TYPE y) {
  return x * y;
}

TYPE arithmetic_divide(TYPE x, TYPE y) {
  return x / y;
}

float arithmetic_tan(float x) {
  return tan_fp32(x);
}
`,_=({inputs:e,output:i,target:s})=>{let u=i.type,a=o(u,1,i.normalized),l=f(a),d=e.namedInputs;return c({module:{name:"arithmetic",dependencies:[t.fp32],vs:h},inputs:d,output:i,operationType:u,outputBuffer:s,expression:t=>(0,n.compileExpression)(e.expression,{operations:r.ARITHMETIC_OPERATIONS,inputs:d,laneIndex:t,formatInput:e=>`${e}[${t}]`,formatOutOfBoundsInput:e=>1===d[e].size?`${e}[0]`:l,formatLiteral:e=>{let n=Array.isArray(e)?e[t]??0:e;return`${a}(${function(e,t){switch(e){case"uint8":case"uint16":case"uint32":return`${Math.trunc(t)}u`;case"sint8":case"sint16":case"sint32":return`${Math.trunc(t)}`;default:return Number.isInteger(t)?`${t}.0`:`${t}`}}(u,n)})`},formatCall:(e,t)=>`${e}(${t.join(", ")})`})}),{success:!0}};var x=e.i(25458),v=e.i(34810);let E=`\
#define LE ${+(new Uint8Array(new Uint16Array([255]).buffer)[0]>0)}
const uint F32_NAN = 0xffffffffu;
const uint F32_INF = 0x7f800000u;

// Find first set bit using binary search
// https://en.wikipedia.org/wiki/Find_first_set#CLZ
int countLeadingZeros(uint a) {
  if (a == 0u) return 32;
  int n = 0;
  if ((a & 0xffff0000u) == 0u) { n += 16; a = a << 16; }
  if ((a & 0xff000000u) == 0u) { n += 8;  a = a << 8;  }
  if ((a & 0xf0000000u) == 0u) { n += 4;  a = a << 4;  }
  if ((a & 0xc0000000u) == 0u) { n += 2;  a = a << 2;  }
  if ((a & 0x80000000u) == 0u) return n + 1;
  return n;
}

uint roundShiftRight(uint value, int shift) {
  if (shift <= 0) {
    return value << (-shift);
  }

  if (shift >= 32) {
    if (shift == 32 && value > 0x80000000u) {
      return 1u;
    }
    return 0u;
  }

  uint truncated = value >> shift;
  uint halfShift = 1u << (shift - 1);
  uint remainder = value & ((1u << shift) - 1u);
  if (remainder > halfShift || (remainder == halfShift && (truncated & 1u) == 1u)) {
    return truncated + 1u;
  }
  return truncated;
}

uint makeFloat_(uint sign, int exponent, uint mantissa) {
  return (sign << 31) | (uint(exponent + 127) << 23) | (mantissa & 0x7fffffu);
}

/**
 * Assemble a float32 in bit representation according to IEEE 754
 * https://en.wikipedia.org/wiki/Single-precision_floating-point_format
 */
uint makeFloat(uint sign, int exponent, uint significand) {
  if (significand == 0u) {
    return sign << 31;
  }

  // Remove any extra leading zeros for better precision
  int lead_zeros = countLeadingZeros(significand);
  // Significand is encoded as 1.fraction
  int normalizedExponent = exponent + 31 - lead_zeros;

  if (normalizedExponent > 127) {
    return (sign << 31) | F32_INF;
  }

  uint mantissa;
  if (normalizedExponent >= -126) {
    mantissa = roundShiftRight(significand, 8 - lead_zeros);
    if (mantissa >= 0x1000000u) {
      mantissa >>= 1;
      normalizedExponent++;
      if (normalizedExponent > 127) {
        return (sign << 31) | F32_INF;
      }
    }
    return makeFloat_(sign, normalizedExponent, mantissa);
  }

  int subnormalShift = -149 - exponent;
  mantissa = roundShiftRight(significand, subnormalShift);
  if (mantissa >= 0x800000u) {
    return (sign << 31) | (1u << 23);
  }
  return (sign << 31) | mantissa;
}

/**
 * Parse 8-byte memory as a float64 number according to IEEE 754
 * https://en.wikipedia.org/wiki/Double-precision_floating-point_format
 * Returns 8-byte memory as 2 float32 numbers, consisting of
 * high part: fround(d)
 * low part: d - fround(d)
 */
uvec2 parseAsDouble(uvec2 d) {
  #if LE
  d = d.yx; // to big endian
  #endif

  uint sign = (d[0] >> 31) & 1u; // first bit
  uint exponentBits = (d[0] >> 20) & 0x7ffu;
  int exponent = int(exponentBits) - 1023; // next 11 bits
  uint fractionHigh = d[0] & 0xfffffu;
  uint fractionLow = d[1];

  if (exponentBits == 0x7ffu) {
    if (fractionHigh == 0u && fractionLow == 0u) {
      return uvec2((sign << 31) | F32_INF, F32_NAN);
    }
    return uvec2(F32_NAN);
  }
  
  if (exponentBits == 0u) {
    // All float64 subnormals are too small to survive a float32 split.
    return uvec2(sign << 31);
  }

  if (exponent > 127) {
    return uvec2((sign << 31) | F32_INF, ((1u - sign) << 31) | F32_INF);
  }

  uint hi_part;
  uint low_part;

  // float64 significand has 52 bits
  // float32 significand has 23 bits
  // The significand of the high part is the significand of the double, trimmed
  uint f_hi = 0x800000u | (fractionHigh << 3) | (fractionLow >> 29);
  uint f_low = fractionLow & 0x1fffffffu;

  if (exponent < -126) {
    // For tiny normals, the top 24 significand bits still contribute to the float32
    // high part, but they land in the float32 subnormal range.
    hi_part = makeFloat(sign, exponent - 23, f_hi);

    // The residual keeps the remaining 29 significand bits at the original double scale.
    low_part = makeFloat(sign, exponent - 52, f_low);
    return uvec2(hi_part, low_part);
  }

  bool roundUp = f_low > 0x10000000u || (f_low == 0x10000000u && (f_hi & 1u) == 1u);

  uint f_rounded = f_hi + (roundUp ? 1u : 0u);
  int exponent_hi = exponent;
  if (f_rounded == 0x1000000u) {
    f_rounded = 0x800000u;
    exponent_hi++;
  }

  if (exponent_hi > 127) {
    // Overflows float32 limit
    hi_part = (sign << 31) | F32_INF;
    low_part = ((1u - sign) << 31) | F32_INF;
    return uvec2(hi_part, low_part);
  }
  
  hi_part = makeFloat_(sign, exponent_hi, f_rounded);

  int remainder = int(f_low);
  uint sign_low = sign;
  if (roundUp) {
    remainder -= 0x20000000;
  }
  if (remainder < 0) {
    sign_low = 1u - sign;
    remainder = -remainder;
  }
  low_part = makeFloat(sign_low, exponent - 52, uint(remainder));

  return uvec2(hi_part, low_part);
}

void fround(in uint x[X_LEN], out float result[X_LEN]) {
  int n = X_LEN / 2;
  for (int i = 0; i < n; i++) {
    uvec2 f = parseAsDouble(uvec2(x[i * 2], x[i * 2 + 1]));
    result[i] = uintBitsToFloat(f.x);
    result[i + n] = uintBitsToFloat(f.y);
  }
}
`;function y(e,t,n){let r=function(e){switch(e){case"uint32":return"usampler2D";case"sint32":return"isampler2D";case"float32":return"sampler2D";default:throw Error(`Unsupported WebGL gather sampler type for ${e}`)}}(n),i=o(t,1),s=Array.from({length:e.size},(e,t)=>`  v[${t}] = ${i}(texelFetch(source_values_texture, ivec2(${t}, rowIndex), 0).r);`).join("\n");return{name:"source_values_texture",vs:`
uniform highp ${r} source_values_texture;
void read_source_values(int rowIndex, out TYPE v[${e.size}]) {
${s}
}
`}}function $(e,t,n){let r=n.createTexture({width:Math.max(e.size,1),height:e.length,format:function(e){switch(e){case"uint8":return"r8uint";case"sint8":return"r8sint";case"uint16":return"r16uint";case"sint16":return"r16sint";case"uint32":return"r32uint";case"sint32":return"r32sint";case"float32":return"r32float";default:throw Error(`Unsupported WebGL gather texture format for ${e}`)}}(t),usage:x.Texture.SAMPLE|x.Texture.COPY_DST});if(0===e.length)return r;let i=n.createCommandEncoder();return i.copyBufferToTexture({sourceBuffer:e.buffer,destinationTexture:r,byteOffset:e.offset,bytesPerRow:e.stride,rowsPerImage:e.length,size:[e.size,e.length,1]}),n.submit(i.finish()),r}let b=async({inputs:e,output:t,target:n})=>{var r,s,u;let a,d,c,{ids:p,sourceValues:m}=e,h=n.device,_=g("result",t.type,t.size),x=o(p.type,1),v=o(t.type,1),E=t.type,b=$(m,E,h),T=`\
#version 300 es

void main() {
  INDEX_TYPE ids[1];
  get_ids(ids);
  TYPE result[${t.size}];
  gather(ids, result);
  set_result(result);
}
  `,w=new i.BufferTransform(h,{vs:T,defines:{INDEX_TYPE:x,TYPE:v,RESULT_LEN:t.size.toString(),SOURCE_VALUES_ROWS:m.length.toString()},modules:[(r=p,s=x,a=o(r.type,1),d="aids_0",r.type!==function(e){switch(e){case"uint":return"uint32";case"int":return"sint32";default:return"float32"}}(s)&&(d=`${s}(${d})`),{name:"ids",vs:`
in ${a} aids_0;
void get_ids(out INDEX_TYPE v[1]) {
  v[0] = ${d};
}
`}),y(m,t.type,E),(c=f(t.type),{name:"gather",vs:`
void zero_result(out TYPE result[RESULT_LEN]) {
  for (int i = 0; i < RESULT_LEN; i++) {
    result[i] = ${c};
  }
}

void gather(in INDEX_TYPE ids[1], out TYPE result[RESULT_LEN]) {
  int sourceIndex = int(ids[0]);
  if (sourceIndex < 0 || sourceIndex >= SOURCE_VALUES_ROWS) {
    zero_result(result);
    return;
  }
  read_source_values(sourceIndex, result);
}
`}),_],bindings:{source_values_texture:b},bufferLayout:[{name:"ids",stepMode:(u=p).isConstant?"vertex":"instance",byteStride:u.stride,attributes:[{attribute:"aids_0",format:l(u.type,1,u.normalized),byteOffset:u.offset}]}],vertexCount:1,instanceCount:t.length,feedbackBufferMode:"interleaved",outputs:_.varyings});try{return w.run({inputBuffers:{ids:p.buffer},outputBuffers:{[_.varyings[0]]:n}}),{success:!0}}finally{w.destroy(),b.destroy()}},T=`\
void row_dot(in TYPE x[X_LEN], in TYPE y[Y_LEN], out float result[1]) {
  float sum = 0.0;
  for (int i = 0; i < X_LEN; i++) {
    sum += float(x[i]) * float(y[i]);
  }
  result[0] = sum;
}
`,w=`\
void equalAll(in TYPE x[X_LEN], in TYPE y[Y_LEN], out uint result[1]) {
  uint allEqual = uint(1);
  for (int i = 0; i < X_LEN; i++) {
    if (x[i] != y[i]) {
      allEqual = uint(0);
      break;
    }
  }
  result[0] = allEqual;
}
`,S=`\
void row_length(in TYPE x[X_LEN], out float result[1]) {
  float sum = 0.0;
  for (int i = 0; i < X_LEN; i++) {
    sum += float(x[i]) * float(x[i]);
  }
  result[0] = sqrt(sum);
}
`,z=async({inputs:e,output:t,target:n})=>{let{segments:r}=e,s=n.device,u=g("result",t.type,t.size),a=r.type,o=$(r,a,s),l=new i.BufferTransform(s,{vs:`\
#version 300 es

void main() {
  TYPE result[RESULT_LEN];
  segmentedMap(result);
  set_result(result);
}
`,defines:{TYPE:"uint",RESULT_LEN:t.size.toString(),SEGMENTS_LENGTH:r.length.toString()},modules:[y(r,t.type,a),{name:"segmentedMap",vs:`
uint read_segment_start(int segmentIndex) {
  TYPE value[1];
  read_source_values(segmentIndex, value);
  return uint(value[0]);
}

void segmentedMap(out TYPE result[RESULT_LEN]) {
  uint vertexIndex = uint(gl_InstanceID);
  int low = 0;
  int high = SEGMENTS_LENGTH;

  while (low < high) {
    int mid = low + (high - low) / 2;
    uint midStart = read_segment_start(mid);
    if (midStart <= vertexIndex) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  uint segmentIndex = uint(max(low - 1, 0));
  uint segmentStart = read_segment_start(int(segmentIndex));
  result[0] = segmentIndex;
  result[1] = vertexIndex - segmentStart;
}
`},u],bindings:{source_values_texture:o},vertexCount:1,instanceCount:t.length,feedbackBufferMode:"interleaved",outputs:u.varyings});try{return l.run({outputBuffers:{[u.varyings[0]]:n}}),{success:!0}}finally{l.destroy(),o.destroy()}},P=async({inputs:e,output:t,target:n})=>{let r=f(o(t.type,1,t.normalized));return c({module:{name:"select",vs:""},inputs:e,output:t,operationType:t.type,outputBuffer:n,expression:t=>{let n=L("condition",e.condition,t,r),i=L("whenTrue",e.whenTrue,t,r),s=L("whenFalse",e.whenFalse,t,r);return`(${n} != ${r} ? ${i} : ${s})`}}),{success:!0}};function L(e,t,n,r){return n<t.size?`${e}[${n}]`:1===t.size?`${e}[0]`:r}e.s([],12819),e.i(12819),e.s(["arithmetic",0,_,"dot",0,({inputs:e,output:t,target:n})=>(c({module:{name:"row_dot",vs:T},inputs:e,output:t,operationType:"float32",outputBuffer:n}),{success:!0}),"equalAll",0,({inputs:e,output:t,target:n})=>(c({module:{name:"equalAll",vs:w},inputs:e,output:t,operationType:"uint32"===t.type?e.x.type:t.type,outputBuffer:n}),{success:!0}),"extent",0,({inputs:e,output:t,target:n})=>{let{sourceValues:r}=e,i=n.device;if(0===r.length){let e=new t.ValueType(t.length*t.size);return n.write(e),{success:!0,value:e}}if(r.isConstant){let e=r.value,i=new t.ValueType(t.length*t.size);for(let n=0;n<t.length;n++){let t=e[n];i[2*n]=t,i[2*n+1]=t}return n.write(i),{success:!0,value:i}}let s=i.createTexture({width:1,height:t.length,format:"rg32float",usage:x.Texture.RENDER|x.Texture.COPY_SRC|x.Texture.COPY_DST}),o=i.createFramebuffer({colorAttachments:[s]}),l=`\
#version 300 es

flat out float extent_value;

void main() {
  float sourceValues[SOURCE_VALUES_LEN];
  get_sourceValues(sourceValues);
  extent_value = sourceValues[gl_VertexID];

  float y = (float(gl_VertexID) + 0.5) / float(CHANNEL_COUNT) * 2.0 - 1.0;
  gl_Position = vec4(0.0, y, 0.0, 1.0);
  gl_PointSize = 1.0;
}
  `,f=`\
#version 300 es

precision highp float;

flat in float extent_value;
out vec2 fragColor;

void main() {
  fragColor = vec2(-extent_value, extent_value);
}
  `,d=new v.Model(i,{vs:l,fs:f,topology:"point-list",parameters:{depthCompare:"always",blend:!0,blendColorSrcFactor:"one",blendColorDstFactor:"one",blendColorOperation:"max",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",blendAlphaOperation:"max"},modules:[p("sourceValues",r.type,r.size,r.normalized)],defines:{TYPE:"float",SOURCE_VALUES_LEN:r.size.toString(),CHANNEL_COUNT:t.length.toString()},attributes:{sourceValues:r.buffer},bufferLayout:[m("sourceValues",r)],instanceCount:r.length,vertexCount:t.length,disableWarnings:!0}),c=a.bufferPool.createOrReuse(i,t.byteLength);try{let e=i.beginRenderPass({framebuffer:o,parameters:{viewport:[0,0,1,t.length]},clearColor:[-3e38,-3e38,0,0],clearDepth:!1,clearStencil:!1});i.statsManager.getStats("GPGPU Operation Counts").get("Transform Runs").incrementCount(),d.draw(e),e.end();let r=i.createCommandEncoder();return r.copyTextureToBuffer({sourceTexture:s,width:1,height:t.length,destinationBuffer:c,byteOffset:0,bytesPerRow:8}),i.submit(r.finish()),_({device:i,inputs:{expression:{kind:"call",op:"multiply",args:[{kind:"input",name:"x"},{kind:"literal",value:[-1,1]}]},namedInputs:{x:new u.GPUDataEvaluator({buffer:c,size:2,type:"float32",length:t.length})}},output:t,target:n})}finally{d.destroy(),a.bufferPool.recycle(c),o.destroy(),s.destroy()}},"fround",0,({inputs:e,output:t,target:n})=>(c({module:{name:"fround",vs:E},inputs:e,output:t,operationType:"uint32",outputBuffer:n}),{success:!0}),"gather",0,b,"interleave",0,({inputs:e,output:t,target:n})=>{let r=e.map((e,t)=>[`x${t}`,e]);(function(e,t){let n=t.reduce((e,[,t])=>e+Math.ceil(t.size/4),0);if(n>e)throw Error(`interleave() requires ${n} vertex attributes, exceeding device limit ${e}`)})(n.device.limits.maxVertexAttributes,r),function(e,t){if(t.size>e)throw Error(`interleave() output size ${t.size} exceeds device inter-stage component limit ${e}`)}(n.device.limits.maxInterStageShaderVariables,t);let i=r.map(([e,t])=>`in TYPE ${e}[${t.size}]`).join(", "),s=0,u=r.map(([e,t])=>{let n=Array.from({length:t.size},(t,n)=>`  result[${s+n}] = ${e}[${n}];`).join("\n");return s+=t.size,n}).join("\n");return c({module:{name:"interleave",vs:`\
void interleave(${i}, out TYPE result[RESULT_LEN]) {
${u}
}
`},inputs:e,output:t,outputBuffer:n}),{success:!0}},"length",0,({inputs:e,output:t,target:n})=>(c({module:{name:"row_length",vs:S},inputs:e,output:t,operationType:"float32",outputBuffer:n}),{success:!0}),"segmentedMap",0,z,"select",0,P,"sequence",0,({inputs:e,output:t,target:n})=>{let r=g("result",t.type,t.size),s=new i.BufferTransform(n.device,{vs:`\
#version 300 es

void main() {
  int result[1];
  result[0] = START + gl_InstanceID * STEP;
  set_result(result);
}
`,defines:{START:e.start.toString(),STEP:e.step.toString()},modules:[r],vertexCount:1,instanceCount:t.length,feedbackBufferMode:"interleaved",outputs:r.varyings});try{return s.run({outputBuffers:{[r.varyings[0]]:n}}),{success:!0}}finally{s.destroy()}},"swizzle",0,({inputs:e,output:t,target:n})=>{let{columns:r}=e;return c({module:{name:"swizzle",vs:"// swizzle expression handled inline"},expression:e=>`x[${r[e]}]`,inputs:{x:e.x},output:t,outputBuffer:n}),{success:!0}}],70897)}]);