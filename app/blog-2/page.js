
import Layout from "@/components/layout/Layout"
import Blog2 from "@/components/pages/Blog2"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Blog" mainCls="padding-0" breadcrumbImage="/images/section/home-3.jpg">
				<Blog2 />
			</Layout>
		</>
	)
}