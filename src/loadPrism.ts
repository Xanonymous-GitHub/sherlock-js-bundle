import type { Prism } from "prism-esm"

import { loader as _0 } from 'prism-esm/components/prism-abap'
import { loader as _1 } from 'prism-esm/components/prism-abnf'
import { loader as _2 } from 'prism-esm/components/prism-actionscript'
import { loader as _3 } from 'prism-esm/components/prism-ada'
import { loader as _4 } from 'prism-esm/components/prism-agda'
import { loader as _5 } from 'prism-esm/components/prism-al'
import { loader as _6 } from 'prism-esm/components/prism-antlr4'
import { loader as _7 } from 'prism-esm/components/prism-apacheconf'
import { loader as _8 } from 'prism-esm/components/prism-apex'
import { loader as _9 } from 'prism-esm/components/prism-apl'
import { loader as _10 } from 'prism-esm/components/prism-applescript'
import { loader as _11 } from 'prism-esm/components/prism-aql'
import { loader as _12 } from 'prism-esm/components/prism-arduino'
import { loader as _13 } from 'prism-esm/components/prism-arff'
import { loader as _14 } from 'prism-esm/components/prism-armasm'
import { loader as _15 } from 'prism-esm/components/prism-arturo'
import { loader as _16 } from 'prism-esm/components/prism-asciidoc'
import { loader as _17 } from 'prism-esm/components/prism-asm6502'
import { loader as _18 } from 'prism-esm/components/prism-asmatmel'
import { loader as _19 } from 'prism-esm/components/prism-aspnet'
import { loader as _20 } from 'prism-esm/components/prism-autohotkey'
import { loader as _21 } from 'prism-esm/components/prism-autoit'
import { loader as _22 } from 'prism-esm/components/prism-avisynth'
import { loader as _23 } from 'prism-esm/components/prism-avro-idl'
import { loader as _24 } from 'prism-esm/components/prism-awk'
import { loader as _25 } from 'prism-esm/components/prism-bash'
import { loader as _26 } from 'prism-esm/components/prism-basic'
import { loader as _27 } from 'prism-esm/components/prism-batch'
import { loader as _28 } from 'prism-esm/components/prism-bbcode'
import { loader as _29 } from 'prism-esm/components/prism-bbj'
import { loader as _30 } from 'prism-esm/components/prism-bicep'
import { loader as _31 } from 'prism-esm/components/prism-birb'
import { loader as _32 } from 'prism-esm/components/prism-bison'
import { loader as _33 } from 'prism-esm/components/prism-bnf'
import { loader as _34 } from 'prism-esm/components/prism-bqn'
import { loader as _35 } from 'prism-esm/components/prism-brainfuck'
import { loader as _36 } from 'prism-esm/components/prism-brightscript'
import { loader as _37 } from 'prism-esm/components/prism-bro'
import { loader as _38 } from 'prism-esm/components/prism-bsl'
import { loader as _39 } from 'prism-esm/components/prism-c'
import { loader as _40 } from 'prism-esm/components/prism-cfscript'
import { loader as _41 } from 'prism-esm/components/prism-chaiscript'
import { loader as _42 } from 'prism-esm/components/prism-cil'
import { loader as _43 } from 'prism-esm/components/prism-cilkc'
import { loader as _44 } from 'prism-esm/components/prism-cilkcpp'
import { loader as _45 } from 'prism-esm/components/prism-clike'
import { loader as _46 } from 'prism-esm/components/prism-clojure'
import { loader as _47 } from 'prism-esm/components/prism-cmake'
import { loader as _48 } from 'prism-esm/components/prism-cobol'
import { loader as _49 } from 'prism-esm/components/prism-coffeescript'
import { loader as _50 } from 'prism-esm/components/prism-concurnas'
import { loader as _51 } from 'prism-esm/components/prism-cooklang'
import { loader as _52 } from 'prism-esm/components/prism-coq'
import { loader as _53 } from 'prism-esm/components/prism-cpp'
import { loader as _54 } from 'prism-esm/components/prism-crystal'
import { loader as _55 } from 'prism-esm/components/prism-csharp'
import { loader as _56 } from 'prism-esm/components/prism-cshtml'
import { loader as _57 } from 'prism-esm/components/prism-csp'
import { loader as _58 } from 'prism-esm/components/prism-css-extras'
import { loader as _59 } from 'prism-esm/components/prism-css'
import { loader as _60 } from 'prism-esm/components/prism-csv'
import { loader as _61 } from 'prism-esm/components/prism-cue'
import { loader as _62 } from 'prism-esm/components/prism-cypher'
import { loader as _63 } from 'prism-esm/components/prism-d'
import { loader as _64 } from 'prism-esm/components/prism-dart'
import { loader as _65 } from 'prism-esm/components/prism-dataweave'
import { loader as _66 } from 'prism-esm/components/prism-dax'
import { loader as _67 } from 'prism-esm/components/prism-dhall'
import { loader as _68 } from 'prism-esm/components/prism-diff'
import { loader as _69 } from 'prism-esm/components/prism-django'
import { loader as _70 } from 'prism-esm/components/prism-dns-zone-file'
import { loader as _71 } from 'prism-esm/components/prism-docker'
import { loader as _72 } from 'prism-esm/components/prism-dot'
import { loader as _73 } from 'prism-esm/components/prism-ebnf'
import { loader as _74 } from 'prism-esm/components/prism-editorconfig'
import { loader as _75 } from 'prism-esm/components/prism-eiffel'
import { loader as _76 } from 'prism-esm/components/prism-ejs'
import { loader as _77 } from 'prism-esm/components/prism-elixir'
import { loader as _78 } from 'prism-esm/components/prism-elm'
import { loader as _79 } from 'prism-esm/components/prism-erb'
import { loader as _80 } from 'prism-esm/components/prism-erlang'
import { loader as _81 } from 'prism-esm/components/prism-etlua'
import { loader as _82 } from 'prism-esm/components/prism-excel-formula'
import { loader as _83 } from 'prism-esm/components/prism-factor'
import { loader as _84 } from 'prism-esm/components/prism-false'
import { loader as _85 } from 'prism-esm/components/prism-firestore-security-rules'
import { loader as _86 } from 'prism-esm/components/prism-flow'
import { loader as _87 } from 'prism-esm/components/prism-fortran'
import { loader as _88 } from 'prism-esm/components/prism-fsharp'
import { loader as _89 } from 'prism-esm/components/prism-ftl'
import { loader as _90 } from 'prism-esm/components/prism-gap'
import { loader as _91 } from 'prism-esm/components/prism-gcode'
import { loader as _92 } from 'prism-esm/components/prism-gdscript'
import { loader as _93 } from 'prism-esm/components/prism-gedcom'
import { loader as _94 } from 'prism-esm/components/prism-gettext'
import { loader as _95 } from 'prism-esm/components/prism-gherkin'
import { loader as _96 } from 'prism-esm/components/prism-git'
import { loader as _97 } from 'prism-esm/components/prism-glsl'
import { loader as _98 } from 'prism-esm/components/prism-gml'
import { loader as _99 } from 'prism-esm/components/prism-gn'
import { loader as _100 } from 'prism-esm/components/prism-go-module'
import { loader as _101 } from 'prism-esm/components/prism-go'
import { loader as _102 } from 'prism-esm/components/prism-gradle'
import { loader as _103 } from 'prism-esm/components/prism-graphql'
import { loader as _104 } from 'prism-esm/components/prism-groovy'
import { loader as _105 } from 'prism-esm/components/prism-haml'
import { loader as _106 } from 'prism-esm/components/prism-handlebars'
import { loader as _107 } from 'prism-esm/components/prism-haskell'
import { loader as _108 } from 'prism-esm/components/prism-haxe'
import { loader as _109 } from 'prism-esm/components/prism-hcl'
import { loader as _110 } from 'prism-esm/components/prism-hlsl'
import { loader as _111 } from 'prism-esm/components/prism-hoon'
import { loader as _112 } from 'prism-esm/components/prism-hpkp'
import { loader as _113 } from 'prism-esm/components/prism-hsts'
import { loader as _114 } from 'prism-esm/components/prism-http'
import { loader as _115 } from 'prism-esm/components/prism-ichigojam'
import { loader as _116 } from 'prism-esm/components/prism-icon'
import { loader as _117 } from 'prism-esm/components/prism-icu-message-format'
import { loader as _118 } from 'prism-esm/components/prism-idris'
import { loader as _119 } from 'prism-esm/components/prism-iecst'
import { loader as _120 } from 'prism-esm/components/prism-ignore'
import { loader as _121 } from 'prism-esm/components/prism-inform7'
import { loader as _122 } from 'prism-esm/components/prism-ini'
import { loader as _123 } from 'prism-esm/components/prism-io'
import { loader as _124 } from 'prism-esm/components/prism-j'
import { loader as _125 } from 'prism-esm/components/prism-java'
import { loader as _126 } from 'prism-esm/components/prism-javadoc'
import { loader as _127 } from 'prism-esm/components/prism-javadoclike'
import { loader as _128 } from 'prism-esm/components/prism-javascript'
import { loader as _129 } from 'prism-esm/components/prism-javastacktrace'
import { loader as _130 } from 'prism-esm/components/prism-jexl'
import { loader as _131 } from 'prism-esm/components/prism-jolie'
import { loader as _132 } from 'prism-esm/components/prism-jq'
import { loader as _133 } from 'prism-esm/components/prism-js-extras'
import { loader as _134 } from 'prism-esm/components/prism-js-templates'
import { loader as _135 } from 'prism-esm/components/prism-jsdoc'
import { loader as _136 } from 'prism-esm/components/prism-json'
import { loader as _137 } from 'prism-esm/components/prism-json5'
import { loader as _138 } from 'prism-esm/components/prism-jsonp'
import { loader as _139 } from 'prism-esm/components/prism-jsstacktrace'
import { loader as _140 } from 'prism-esm/components/prism-jsx'
import { loader as _141 } from 'prism-esm/components/prism-julia'
import { loader as _142 } from 'prism-esm/components/prism-keepalived'
import { loader as _143 } from 'prism-esm/components/prism-keyman'
import { loader as _144 } from 'prism-esm/components/prism-kotlin'
import { loader as _145 } from 'prism-esm/components/prism-kumir'
import { loader as _146 } from 'prism-esm/components/prism-kusto'
import { loader as _147 } from 'prism-esm/components/prism-latex'
import { loader as _148 } from 'prism-esm/components/prism-latte'
import { loader as _149 } from 'prism-esm/components/prism-less'
import { loader as _150 } from 'prism-esm/components/prism-lilypond'
import { loader as _151 } from 'prism-esm/components/prism-linker-script'
import { loader as _152 } from 'prism-esm/components/prism-liquid'
import { loader as _153 } from 'prism-esm/components/prism-lisp'
import { loader as _154 } from 'prism-esm/components/prism-livescript'
import { loader as _155 } from 'prism-esm/components/prism-llvm'
import { loader as _156 } from 'prism-esm/components/prism-log'
import { loader as _157 } from 'prism-esm/components/prism-lolcode'
import { loader as _158 } from 'prism-esm/components/prism-lua'
import { loader as _159 } from 'prism-esm/components/prism-magma'
import { loader as _160 } from 'prism-esm/components/prism-makefile'
import { loader as _161 } from 'prism-esm/components/prism-markdown'
import { loader as _162 } from 'prism-esm/components/prism-markup-templating'
import { loader as _163 } from 'prism-esm/components/prism-markup'
import { loader as _164 } from 'prism-esm/components/prism-mata'
import { loader as _165 } from 'prism-esm/components/prism-matlab'
import { loader as _166 } from 'prism-esm/components/prism-maxscript'
import { loader as _167 } from 'prism-esm/components/prism-mel'
import { loader as _168 } from 'prism-esm/components/prism-mermaid'
import { loader as _169 } from 'prism-esm/components/prism-metafont'
import { loader as _170 } from 'prism-esm/components/prism-mizar'
import { loader as _171 } from 'prism-esm/components/prism-mongodb'
import { loader as _172 } from 'prism-esm/components/prism-monkey'
import { loader as _173 } from 'prism-esm/components/prism-moonscript'
import { loader as _174 } from 'prism-esm/components/prism-n1ql'
import { loader as _175 } from 'prism-esm/components/prism-n4js'
import { loader as _176 } from 'prism-esm/components/prism-nand2tetris-hdl'
import { loader as _177 } from 'prism-esm/components/prism-naniscript'
import { loader as _178 } from 'prism-esm/components/prism-nasm'
import { loader as _179 } from 'prism-esm/components/prism-neon'
import { loader as _180 } from 'prism-esm/components/prism-nevod'
import { loader as _181 } from 'prism-esm/components/prism-nginx'
import { loader as _182 } from 'prism-esm/components/prism-nim'
import { loader as _183 } from 'prism-esm/components/prism-nix'
import { loader as _184 } from 'prism-esm/components/prism-nsis'
import { loader as _185 } from 'prism-esm/components/prism-objectivec'
import { loader as _186 } from 'prism-esm/components/prism-ocaml'
import { loader as _187 } from 'prism-esm/components/prism-odin'
import { loader as _188 } from 'prism-esm/components/prism-opencl'
import { loader as _189 } from 'prism-esm/components/prism-openqasm'
import { loader as _190 } from 'prism-esm/components/prism-oz'
import { loader as _191 } from 'prism-esm/components/prism-parigp'
import { loader as _192 } from 'prism-esm/components/prism-parser'
import { loader as _193 } from 'prism-esm/components/prism-pascal'
import { loader as _194 } from 'prism-esm/components/prism-pascaligo'
import { loader as _195 } from 'prism-esm/components/prism-pcaxis'
import { loader as _196 } from 'prism-esm/components/prism-peoplecode'
import { loader as _197 } from 'prism-esm/components/prism-perl'
import { loader as _198 } from 'prism-esm/components/prism-php-extras'
import { loader as _199 } from 'prism-esm/components/prism-php'
import { loader as _200 } from 'prism-esm/components/prism-phpdoc'
import { loader as _201 } from 'prism-esm/components/prism-plant-uml'
import { loader as _202 } from 'prism-esm/components/prism-plsql'
import { loader as _203 } from 'prism-esm/components/prism-powerquery'
import { loader as _204 } from 'prism-esm/components/prism-powershell'
import { loader as _205 } from 'prism-esm/components/prism-processing'
import { loader as _206 } from 'prism-esm/components/prism-prolog'
import { loader as _207 } from 'prism-esm/components/prism-promql'
import { loader as _208 } from 'prism-esm/components/prism-properties'
import { loader as _209 } from 'prism-esm/components/prism-protobuf'
import { loader as _210 } from 'prism-esm/components/prism-psl'
import { loader as _211 } from 'prism-esm/components/prism-pug'
import { loader as _212 } from 'prism-esm/components/prism-puppet'
import { loader as _213 } from 'prism-esm/components/prism-pure'
import { loader as _214 } from 'prism-esm/components/prism-purebasic'
import { loader as _215 } from 'prism-esm/components/prism-purescript'
import { loader as _216 } from 'prism-esm/components/prism-python'
import { loader as _217 } from 'prism-esm/components/prism-q'
import { loader as _218 } from 'prism-esm/components/prism-qml'
import { loader as _219 } from 'prism-esm/components/prism-qore'
import { loader as _220 } from 'prism-esm/components/prism-qsharp'
import { loader as _221 } from 'prism-esm/components/prism-r'
import { loader as _222 } from 'prism-esm/components/prism-racket'
import { loader as _223 } from 'prism-esm/components/prism-reason'
import { loader as _224 } from 'prism-esm/components/prism-regex'
import { loader as _225 } from 'prism-esm/components/prism-rego'
import { loader as _226 } from 'prism-esm/components/prism-renpy'
import { loader as _227 } from 'prism-esm/components/prism-rescript'
import { loader as _228 } from 'prism-esm/components/prism-rest'
import { loader as _229 } from 'prism-esm/components/prism-rip'
import { loader as _230 } from 'prism-esm/components/prism-roboconf'
import { loader as _231 } from 'prism-esm/components/prism-robotframework'
import { loader as _232 } from 'prism-esm/components/prism-ruby'
import { loader as _233 } from 'prism-esm/components/prism-rust'
import { loader as _234 } from 'prism-esm/components/prism-sas'
import { loader as _235 } from 'prism-esm/components/prism-sass'
import { loader as _236 } from 'prism-esm/components/prism-scala'
import { loader as _237 } from 'prism-esm/components/prism-scheme'
import { loader as _238 } from 'prism-esm/components/prism-scss'
import { loader as _239 } from 'prism-esm/components/prism-shell-session'
import { loader as _240 } from 'prism-esm/components/prism-smali'
import { loader as _241 } from 'prism-esm/components/prism-smalltalk'
import { loader as _242 } from 'prism-esm/components/prism-smarty'
import { loader as _243 } from 'prism-esm/components/prism-sml'
import { loader as _244 } from 'prism-esm/components/prism-solidity'
import { loader as _245 } from 'prism-esm/components/prism-solution-file'
import { loader as _246 } from 'prism-esm/components/prism-soy'
import { loader as _247 } from 'prism-esm/components/prism-sparql'
import { loader as _248 } from 'prism-esm/components/prism-splunk-spl'
import { loader as _249 } from 'prism-esm/components/prism-sqf'
import { loader as _250 } from 'prism-esm/components/prism-sql'
import { loader as _251 } from 'prism-esm/components/prism-squirrel'
import { loader as _252 } from 'prism-esm/components/prism-stan'
import { loader as _253 } from 'prism-esm/components/prism-stata'
import { loader as _254 } from 'prism-esm/components/prism-stylus'
import { loader as _255 } from 'prism-esm/components/prism-supercollider'
import { loader as _256 } from 'prism-esm/components/prism-swift'
import { loader as _257 } from 'prism-esm/components/prism-systemd'
import { loader as _258 } from 'prism-esm/components/prism-t4-cs'
import { loader as _259 } from 'prism-esm/components/prism-t4-templating'
import { loader as _260 } from 'prism-esm/components/prism-t4-vb'
import { loader as _261 } from 'prism-esm/components/prism-tap'
import { loader as _262 } from 'prism-esm/components/prism-tcl'
import { loader as _263 } from 'prism-esm/components/prism-textile'
import { loader as _264 } from 'prism-esm/components/prism-toml'
import { loader as _265 } from 'prism-esm/components/prism-tremor'
import { loader as _266 } from 'prism-esm/components/prism-tsx'
import { loader as _267 } from 'prism-esm/components/prism-tt2'
import { loader as _268 } from 'prism-esm/components/prism-turtle'
import { loader as _269 } from 'prism-esm/components/prism-twig'
import { loader as _270 } from 'prism-esm/components/prism-typescript'
import { loader as _271 } from 'prism-esm/components/prism-typoscript'
import { loader as _272 } from 'prism-esm/components/prism-unrealscript'
import { loader as _273 } from 'prism-esm/components/prism-uorazor'
import { loader as _274 } from 'prism-esm/components/prism-uri'
import { loader as _275 } from 'prism-esm/components/prism-v'
import { loader as _276 } from 'prism-esm/components/prism-vala'
import { loader as _277 } from 'prism-esm/components/prism-vbnet'
import { loader as _278 } from 'prism-esm/components/prism-velocity'
import { loader as _279 } from 'prism-esm/components/prism-verilog'
import { loader as _280 } from 'prism-esm/components/prism-vhdl'
import { loader as _281 } from 'prism-esm/components/prism-vim'
import { loader as _282 } from 'prism-esm/components/prism-visual-basic'
import { loader as _283 } from 'prism-esm/components/prism-warpscript'
import { loader as _284 } from 'prism-esm/components/prism-wasm'
import { loader as _285 } from 'prism-esm/components/prism-web-idl'
import { loader as _286 } from 'prism-esm/components/prism-wgsl'
import { loader as _287 } from 'prism-esm/components/prism-wiki'
import { loader as _288 } from 'prism-esm/components/prism-wolfram'
import { loader as _289 } from 'prism-esm/components/prism-wren'
import { loader as _290 } from 'prism-esm/components/prism-xeora'
import { loader as _291 } from 'prism-esm/components/prism-xml-doc'
import { loader as _292 } from 'prism-esm/components/prism-xojo'
import { loader as _293 } from 'prism-esm/components/prism-xquery'
import { loader as _294 } from 'prism-esm/components/prism-yaml'
import { loader as _295 } from 'prism-esm/components/prism-yang'
import { loader as _296 } from 'prism-esm/components/prism-zig'

export const loadPrism = (prism: Prism) => {
    _0(prism)
    _1(prism)
    _2(prism)
    _3(prism)
    _4(prism)
    _5(prism)
    _6(prism)
    _7(prism)
    _8(prism)
    _9(prism)
    _10(prism)
    _11(prism)
    _12(prism)
    _13(prism)
    _14(prism)
    _15(prism)
    _16(prism)
    _17(prism)
    _18(prism)
    _19(prism)
    _20(prism)
    _21(prism)
    _22(prism)
    _23(prism)
    _24(prism)
    _25(prism)
    _26(prism)
    _27(prism)
    _28(prism)
    _29(prism)
    _30(prism)
    _31(prism)
    _32(prism)
    _33(prism)
    _34(prism)
    _35(prism)
    _36(prism)
    _37(prism)
    _38(prism)
    _39(prism)
    _40(prism)
    _41(prism)
    _42(prism)
    _43(prism)
    _44(prism)
    _45(prism)
    _46(prism)
    _47(prism)
    _48(prism)
    _49(prism)
    _50(prism)
    _51(prism)
    _52(prism)
    _53(prism)
    _54(prism)
    _55(prism)
    _56(prism)
    _57(prism)
    _58(prism)
    _59(prism)
    _60(prism)
    _61(prism)
    _62(prism)
    _63(prism)
    _64(prism)
    _65(prism)
    _66(prism)
    _67(prism)
    _68(prism)
    _69(prism)
    _70(prism)
    _71(prism)
    _72(prism)
    _73(prism)
    _74(prism)
    _75(prism)
    _76(prism)
    _77(prism)
    _78(prism)
    _79(prism)
    _80(prism)
    _81(prism)
    _82(prism)
    _83(prism)
    _84(prism)
    _85(prism)
    _86(prism)
    _87(prism)
    _88(prism)
    _89(prism)
    _90(prism)
    _91(prism)
    _92(prism)
    _93(prism)
    _94(prism)
    _95(prism)
    _96(prism)
    _97(prism)
    _98(prism)
    _99(prism)
    _100(prism)
    _101(prism)
    _102(prism)
    _103(prism)
    _104(prism)
    _105(prism)
    _106(prism)
    _107(prism)
    _108(prism)
    _109(prism)
    _110(prism)
    _111(prism)
    _112(prism)
    _113(prism)
    _114(prism)
    _115(prism)
    _116(prism)
    _117(prism)
    _118(prism)
    _119(prism)
    _120(prism)
    _121(prism)
    _122(prism)
    _123(prism)
    _124(prism)
    _125(prism)
    _126(prism)
    _127(prism)
    _128(prism)
    _129(prism)
    _130(prism)
    _131(prism)
    _132(prism)
    _133(prism)
    _134(prism)
    _135(prism)
    _136(prism)
    _137(prism)
    _138(prism)
    _139(prism)
    _140(prism)
    _141(prism)
    _142(prism)
    _143(prism)
    _144(prism)
    _145(prism)
    _146(prism)
    _147(prism)
    _148(prism)
    _149(prism)
    _150(prism)
    _151(prism)
    _152(prism)
    _153(prism)
    _154(prism)
    _155(prism)
    _156(prism)
    _157(prism)
    _158(prism)
    _159(prism)
    _160(prism)
    _161(prism)
    _162(prism)
    _163(prism)
    _164(prism)
    _165(prism)
    _166(prism)
    _167(prism)
    _168(prism)
    _169(prism)
    _170(prism)
    _171(prism)
    _172(prism)
    _173(prism)
    _174(prism)
    _175(prism)
    _176(prism)
    _177(prism)
    _178(prism)
    _179(prism)
    _180(prism)
    _181(prism)
    _182(prism)
    _183(prism)
    _184(prism)
    _185(prism)
    _186(prism)
    _187(prism)
    _188(prism)
    _189(prism)
    _190(prism)
    _191(prism)
    _192(prism)
    _193(prism)
    _194(prism)
    _195(prism)
    _196(prism)
    _197(prism)
    _198(prism)
    _199(prism)
    _200(prism)
    _201(prism)
    _202(prism)
    _203(prism)
    _204(prism)
    _205(prism)
    _206(prism)
    _207(prism)
    _208(prism)
    _209(prism)
    _210(prism)
    _211(prism)
    _212(prism)
    _213(prism)
    _214(prism)
    _215(prism)
    _216(prism)
    _217(prism)
    _218(prism)
    _219(prism)
    _220(prism)
    _221(prism)
    _222(prism)
    _223(prism)
    _224(prism)
    _225(prism)
    _226(prism)
    _227(prism)
    _228(prism)
    _229(prism)
    _230(prism)
    _231(prism)
    _232(prism)
    _233(prism)
    _234(prism)
    _235(prism)
    _236(prism)
    _237(prism)
    _238(prism)
    _239(prism)
    _240(prism)
    _241(prism)
    _242(prism)
    _243(prism)
    _244(prism)
    _245(prism)
    _246(prism)
    _247(prism)
    _248(prism)
    _249(prism)
    _250(prism)
    _251(prism)
    _252(prism)
    _253(prism)
    _254(prism)
    _255(prism)
    _256(prism)
    _257(prism)
    _258(prism)
    _259(prism)
    _260(prism)
    _261(prism)
    _262(prism)
    _263(prism)
    _264(prism)
    _265(prism)
    _266(prism)
    _267(prism)
    _268(prism)
    _269(prism)
    _270(prism)
    _271(prism)
    _272(prism)
    _273(prism)
    _274(prism)
    _275(prism)
    _276(prism)
    _277(prism)
    _278(prism)
    _279(prism)
    _280(prism)
    _281(prism)
    _282(prism)
    _283(prism)
    _284(prism)
    _285(prism)
    _286(prism)
    _287(prism)
    _288(prism)
    _289(prism)
    _290(prism)
    _291(prism)
    _292(prism)
    _293(prism)
    _294(prism)
    _295(prism)
    _296(prism)
}
