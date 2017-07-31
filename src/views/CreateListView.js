import MainContent from './MainContent.vue'

const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

// This is a factory function for dynamically creating root-level list views,
// since they share most of the logic except for the type of items to display.
// They are essentially higher order components wrapping ItemList.vue.
export default function createListView (page) {
  return {
    name: `${page}-stories-view`,

    asyncData ({ store }) {
      return store.dispatch('FETCH_LIST_DATA', { page })
    },

    title: camelize(page),

    render (h) {
      return h(MainContent, { props: { page } })
    }
  }
}
