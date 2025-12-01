import Layout from "@/components/layout/Layout"
import BlogDetails50 from "@/components/pages/blogDetails50"
export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={1} date="January 6, 2025" category="Company Deposit Reporting" breadcrumbText="Form DPT-1 – Return of Deposits">
                <BlogDetails50 />
            </Layout>
        </>
    )
}