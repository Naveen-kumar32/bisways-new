import Layout from "@/components/layout/Layout"
import BlogDetails15 from "@/components/pages/blogDetails15"
export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={1} date="July 4, 2023" category="NGO Registration Compliance" breadcrumbText="80G vs 12A Registration">
                <BlogDetails15 />
            </Layout>
        </>
    )
}