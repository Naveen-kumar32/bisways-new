import Layout from "@/components/layout/Layout"
import BlogDetails52 from "@/components/pages/blogDetails52"
export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={1} date="May 21, 2023" category="Business MIS Reporting" breadcrumbText="Monthly Financial Reports for Businesses">
                <BlogDetails52 />
            </Layout>
        </>
    )
}