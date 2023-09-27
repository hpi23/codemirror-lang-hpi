import { testTree } from '@lezer/generator/test'
import { HPILanguage } from './dist/index.js'

let ast = HPILanguage.parser.parse(`
    funk foo() ergibt Nichts {
  solange Zähler < 100_000 {
    e += 1F : f;
    f *= Zähler als Fließkommazahl;
    Zähler += 1;
  }
    }
`)

let spec = ``

// testTree(ast, spec);

console.log(`${ast}`)
