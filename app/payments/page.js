import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData() {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 1000,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 6500,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 4500,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 3200,
            status: "completed",
            email: "m@example.com",
        },
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <div className="text-2xl font-bold pb-10">
                Payments DataTable
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}
