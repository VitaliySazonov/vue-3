// const App = {
//   data() {
//     return {
//       title: 'Notes list',
//       placeholderString: 'To Do name',
//       inputValue: '',
//       notes: ['Note 1', 'Note 2']
//     }
//   },
//   methods: {
//     addNewNote() {
//       if (this.inputValue !== '') {
//         this.notes.push(this.inputValue)
//         this.inputValue = ''
//       }
//     },
//     toUpperCase(item) {
//       return item.toUpperCase()
//     },
//     removeNote(index) {
//       // console.log('removeNote', index)
//       this.notes.splice(index, 1)
//     },
//   },
//   computed: {
//     doubleCountComputed() {
//       console.log('doubleCountComputed')
//       return this.notes.length * 2
//     },
//   },
//   watch: {
//     inputValue(value) {
//       if (value.length > 10) {
//         this.inputValue = ''
//       }
//     },
//   }
// }
//
// Vue.createApp(App).mount('#app')
//


Vue.createApp({
  // data() {
  //   return {
  //
  //   }
  // }
  data: () => ({
    myHtml: '<h1>Vue 3 App</h1>',
    title: 'Im groot',
    person: {
      fname: 'Vito',
      lname: 'Sazo',
      age: 30
    },
    items: [1, 2, 3, 4, 5, 6]
  }),
  methods: {
    addItem(event) {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
      console.log(event.key)
    },
    remove(i) {
      this.items.splice(i, 1)
    },
    log(item) {
      console.log('item', item)
    },
  },
  computed: {
    eventItems() {
      return this.items.filter(i => i % 2 === 0)
    },
  }
}).mount('#app')