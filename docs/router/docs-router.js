import Config from '../config'
import Views from '../views/index.vue'
const langTypes = Config.langTypes
const routerGuide = ['install', 'start', 'i18n', 'theme']
const routerComponents = ['alter']
const routers = []
const renderRouter = () => {
  langTypes.forEach((lang) => {
    const guideChildrens = []
    const componentChildrens = []
    routerComponents.forEach((routerItem) => {
      componentChildrens.push({
        path: `/${lang}/docs/${routerItem}`,
        component: () => import(`../markdown/${lang}/${routerItem}.md`),
      })
    })
    routerGuide.forEach((routerItem) => {
      guideChildrens.push({
        path: `/${lang}/guide/${routerItem}`,
        component: () => import(`../markdown/${lang}/${routerItem}.md`),
      })
    })

    routers.push({
      path: `/${lang}/component`,
      component: Views,
      // redirect: `/${lang}/docs`,
      children: componentChildrens,
    })
    routers.push({
      path: `/${lang}/guide`,
      component: Views,
      // redirect: `/${lang}/guide/install`,
      children: guideChildrens,
    })
  })
}
renderRouter()

export default routers
