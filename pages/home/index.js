Page({
	data: {
		typeShow: false,
		groupShow: false,
		markers: [{
			id: 9,
			latitude: 30,
			longitude: 112,
			title: "五年级数学",
			iconPath: "/images/location.png",
			width: 15,
			height: 17,
			customCallout: {
				display: "ALWAYS", anchorY: 68
			}
		}, {
			id: 10,
			latitude: 30,
			longitude: 114,
			title: "五年级英语",
			iconPath: "/images/location.png",
			width: 15,
			height: 17,
			customCallout: {
				display: "ALWAYS", anchorY: 68
			}
		}, {
			id: 11,
			latitude: 32,
			longitude: 112,
			title: "五年级语文",
			iconPath: "/images/location.png",
			width: 15,
			height: 17,
			customCallout: {
				display: "ALWAYS", anchorY: 68
			}
		}],
		customMarkers: [
			{ id: '9', title: '五年级数学', price: '100' }, { id: '10', title: '五年级英语', price: '200' }, { id: '11', title: '五年级语文', price: '250' }
		],
		groups: [{
			text: '一年级',
			value: 1
		},
		{
			text: '二年级',
			value: 2
		},
		{
			text: '三年级',
			value: 3
		}
		],
		types: [{
			text: '数学',
			value: 1
		},
		{
			text: '语文',
			value: 2
		},
		{
			text: '英语',
			value: 3
		}
		]
	},
	close: function () {

	},
	typeChange: function () {
		this.setData({
			typeShow: true
		})
	},
	typeClick(e) {
		this.setData({
			typeShow: false
		})
	},
	groupChange: function () {
		this.setData({
			groupShow: true
		})
	},
	groupClick(e) {
		this.setData({
			groupShow: false
		})
	}
})