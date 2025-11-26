
import Layout from "@/components/layout/Layout"
import BlogStandard from "@/components/pages/blogStandard"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Bisways Blogs" mainCls="padding-0" breadcrumbImage="/images/section/blog-index.svg">
				<BlogStandard />
			</Layout>
		</>
	)
}