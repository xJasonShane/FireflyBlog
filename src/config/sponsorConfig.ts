import type { SponsorConfig } from "../types/config";

export const sponsorConfig: SponsorConfig = {
	title: "", // 页面标题，如果留空则使用 i18n 中的翻译
	description: "", // 页面描述文本，如果留空则使用 i18n 中的翻译
	usage:
		"您的赞助将用于服务器维护、内容创作和功能开发，帮助我持续提供优质内容。", // 赞助用途说明
	// 是否显示赞助者列表
	showSponsorsList: true,
	// 是否在文章详情页底部显示赞助按钮
	showButtonInPost: true,

	// 赞助方式列表
	methods: [
		{
			name: "支付宝",
			icon: "fa6-brands:alipay",
			qrCode: "/assets/images/sponsor/alipay.png", // 收款码图片路径（需要放在 public 目录下）
			link: "",
			description: "使用 支付宝 扫码赞助",
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa6-brands:weixin",
			qrCode: "/assets/images/sponsor/wechat.png", // 收款码图片路径
			link: "",
			description: "使用 微信 扫码赞助",
			enabled: true,
		},
	],

	// 赞助者列表（可选）
	sponsors: [
		{
			name: "匿名用户",
			amount: "¥6.66",
			date: "2025-01-19",
		},
		{
			name: "匿名用户",
			amount: "¥20",
			date: "2025-02-01",
		},
		{
			name: "匿名用户",
			amount: "¥50",
			date: "2025-04-16",
		},
		{
			name: "匿名用户",
			amount: "¥25",
			date: "2025-06-01",
		},
		{
			name: "匿名用户",
			amount: "¥100",
			date: "2025-11-26",
		},
	],
};
