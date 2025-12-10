import type { SakuraConfig } from "../types/config";

export const sakuraConfig: SakuraConfig = {
	enable: true, // 默认关闭樱花特效
	sakuraNum: 10, // 樱花数量
	limitTimes: -1, // 樱花越界限制次数，-1为无限循环
	size: {
		min: 0.3, // 樱花最小尺寸倍数
		max: 0.8, // 樱花最大尺寸倍数
	},
	opacity: {
		min: 0.2, // 樱花最小不透明度
		max: 0.7, // 樱花最大不透明度
	},
	speed: {
		horizontal: {
			min: -1.0, // 水平移动速度最小值
			max: -0.5, // 水平移动速度最大值
		},
		vertical: {
			min: 2.0, // 垂直移动速度最小值
			max: 3.0, // 垂直移动速度最大值
		},
		rotation: 0.05, // 旋转速度
		fadeSpeed: 0.05, // 消失速度，不应大于最小不透明度
	},
	zIndex: 100, // 层级，确保樱花在合适的层级显示
};
