export default function setHook(assembly){
  return {
    mounted(){
      console.log(this.$slots)
    },
    props:assembly.props,
    render(h){
      const slots = Object.keys(this.$slots)
      .reduce((arr, key) => arr.concat(this.$slots[key]), [])
      .map(vnode => {
        vnode.context = this._self
        return vnode
      })
      return h(assembly,{
                on:this.$listeners,
                props:this.$props,
                attrs:this.$attrs,
                scopedSlots:this.$scopedSlots,
              },
              slots)
    }
  }
}