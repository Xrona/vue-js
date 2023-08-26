/// <reference types="vite/client" />
declare module '*.vue'
declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
