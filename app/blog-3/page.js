
import Layout from "@/components/layout/Layout"
import Blog3 from "@/components/pages/Blog3"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Bisways Blogs" mainCls="padding-0" breadcrumbImage="/images/section/blog-index.svg">
				<Blog3 />
			</Layout>
		</>
	)
}