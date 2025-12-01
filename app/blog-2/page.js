
import Layout from "@/components/layout/Layout"
import Blog2 from "@/components/pages/Blog2"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Bisways Blogs" mainCls="padding-0" breadcrumbImage="/images/section/blog-index.svg">
				<Blog2 />
			</Layout>
		</>
	)
}