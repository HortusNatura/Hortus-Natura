import{r as n,W as l}from"./main-577.js";function r(t){var e=n.useRef();return e.current||(e.current={v:t()}),e.current.v}const c=n.createContext(),u=n.createContext(),b=({state:t,children:e})=>{const a=n.useState(0),s=r(()=>({tabs:0,panels:0})),o=t||a;return l.createElement(u.Provider,{value:s},l.createElement(c.Provider,{value:o},e))},x=()=>{const[t,e]=n.useContext(c),a=n.useContext(u),s=r(()=>{const i=a.tabs;return a.tabs+=1,i}),o=r(()=>()=>e(s));return n.useMemo(()=>({isActive:t===s,onClick:o}),[t,o,s])},v=()=>{const[t]=n.useContext(c),e=n.useContext(u);return r(()=>{const s=e.panels;return e.panels+=1,s})===t},f=({children:t})=>{const e=x();return typeof t=="function"?t(e):n.isValidElement(t)?n.cloneElement(t,e):t},C=({active:t,children:e})=>v()||t?e:null;export{C as P,b as T,f as a};