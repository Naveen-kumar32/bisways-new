import Layout from "@/components/layout/Layout"
import BlogDetails51 from "@/components/pages/blogDetails51"
export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={1} date="February 14, 2023" category="TCS Compliance Guide" breadcrumbText="TCS under Section 206C">
                <BlogDetails51 />
            </Layout>
        </>
    )
}