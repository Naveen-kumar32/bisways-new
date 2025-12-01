import Layout from "@/components/layout/Layout"
import BlogDetails42 from "@/components/pages/blogDetails42"
export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={1} date="February 9, 2022" category="Property TDS Compliance" breadcrumbText="Form 26QB – TDS on Property">
                <BlogDetails42 />
            </Layout>
        </>
    )
}