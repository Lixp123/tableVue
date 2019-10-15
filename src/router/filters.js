//过滤数据
export function capitalize(value){
  if (!value) return '';
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
}
export function stryReverse(value){
  if (!value) return '';
  return value.split('').reverse().join('')
}