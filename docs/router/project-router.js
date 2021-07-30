const routerComponents = ['alter']
const routers = []
const renderRouter = () => {
  routerComponents.forEach((routerItem) => {
    routers.push({
      path: `/project/${routerItem}`,
      component: () => import(`../views/project/${routerItem}.vue`),
    })
  })
}
renderRouter()
export default routers
