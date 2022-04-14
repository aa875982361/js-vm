/**
 * 编译js为汇编语言
 */
// 类库的引用
import * as acorn from "acorn"
import * as walk from "acorn-walk"

/**
 * 测试js代码
 */
const jsCode = `
var name = "plinghuang"
var age = 26
console.log("name", name)
// var obj = new Array()
// for(var i=0; i<1; i++){
//     console.log("xx", i);
// }
// while(obj){
//     obj = undefined
// }
// if(obj === undefined){
//     console.log("undefined");
// }else if (obj == null){
//     console.log("null")
// }else{
//     console.log("other");
// }
// function show(text){
//     console.log("text", text)
// }
// var inner = show("xxx")
`

/**
 * 编译js代码为汇编代码
 * @param jsCodeStr js代码
 * @returns 汇编代码
 */
export default function compileJsToAssembly(jsCodeStr: string): string{
    // 用js的语法分析器 分析一下代码
    const ast = acorn.parse(jsCodeStr, {
        ecmaVersion: "latest"
    })
    // console.log("ast", JSON.stringify(ast, null, 2));
    const map = new Map()
    walk.recursive(ast, map, {
        VariableDeclaration: function(node: acorn.Node, state: Map<any, any>, callback: any){
            // 输出节点
            console.log("node", node)
            debugger
        },
    })
    return ""
    
}

compileJsToAssembly(jsCode)