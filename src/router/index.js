import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CountDown from '@/components/CountDown'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
        },
        {
			path: '/countdown',
			name: 'CountDown',
			component: CountDown
		},
	]
})
