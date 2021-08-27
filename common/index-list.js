// 首页展示所有组件的列表
export default [{
		// 模块名
		module: '基础组件',
		children: [{
			path: 'componentsBase/button/button',
			title: '按钮',
			headIconUrl: '../../static/img/btn.png'
		}, {
			path: 'componentsBase/layout/layout',
			title: '布局',
			headIconUrl: '../../static/img/layout.png'
		}, {
			path: 'componentsBase/cell/cell',
			title: '单元格',
			headIconUrl: '../../static/img/cell.png'
		},  {
			path: 'componentsBase/mask/mask',
			title: '遮罩层',
			headIconUrl: '../../static/img/cell.png'
		},  ]
	},
	{
		// 模块名
		module: '进阶组件',
		children: [{
			path: 'componentsBase/subsection/subsection',
			title: '分段器',
			headIconUrl: '../../static/img/subsection.png'
		}, {
			path: 'componentsBase/select/select',
			title: '选择器',
			headIconUrl: '../../static/img/select.png'
		}, {
			path: 'componentsBase/popup/popup',
			title: '弹出层',
			headIconUrl: '../../static/img/popup.png'
		},],
	}
]
