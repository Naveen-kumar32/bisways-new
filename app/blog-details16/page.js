import Layout from "@/components/layout/Layout"
import BlogDetails16 from "@/components/pages/blogDetails16"
export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={1} date="July 4, 2023" category="CSR Compliance" breadcrumbText="Form CSR-1 Filing">
                <BlogDetails16 />
            </Layout>
        </>
    )
}