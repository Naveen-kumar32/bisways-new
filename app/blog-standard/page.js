
import Layout from "@/components/layout/Layout"
import BlogStandard from "@/components/pages/blogStandard"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Blog" mainCls="padding-0" breadcrumbImage="/images/section/home-3.jpg">
				<BlogStandard />
			</Layout>
		</>
	)
}