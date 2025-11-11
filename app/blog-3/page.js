
import Layout from "@/components/layout/Layout"
import Blog3 from "@/components/pages/Blog3"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Blog" mainCls="padding-0" breadcrumbImage="/images/section/home-3.jpg">
				<Blog3 />
			</Layout>
		</>
	)
}