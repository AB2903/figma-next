export default function table(){
    return (
        <div className="max-h-72 overflow-y-auto">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="text-left sticky top-0 z-10 bg-gray-200">
                        <th className="px-4 py-2">Customer Name</th>
                        <th className="px-4 py-2">Company</th>
                        <th className="px-4 py-2">Phone Number</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Country</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="px-2 py-2">Jane Cooper</td>
                        <td className="px-2 py-2">Microsoft</td>
                        <td className="px-2 py-2">(225) 555-0118</td>
                        <td className="px-2 py-2">jane@microsoft.com</td>
                        <td className="px-2 py-2">United States</td>
                        <td className="px-2 py-2"><button className="border-2 border-teal-600 bg-teal-200 text-teal-600 px-4 py-1">Active</button></td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-2 py-2">JFloyd Miles</td>
                        <td className="px-2 py-2">Yahoo</td>
                        <td className="px-2 py-2">(205) 555-0100</td>
                        <td className="px-2 py-2">floyd@yahoo.com</td>
                        <td className="px-2 py-2">Kiribati</td>
                        <td className="px-2 py-2"><button className="border-2 border-red-600 bg-red-200 text-red-600 font-bold px-3 py-1 ">Inactive</button></td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-2 py-2">Ronald Richards</td>
                        <td className="px-2 py-2">Adobe</td>
                        <td className="px-2 py-2">(302) 555-0107</td>
                        <td className="px-2 py-2">ronald@adobe.com</td>
                        <td className="px-2 py-2">Israel</td>
                        <td className="px-2 py-2"><button className="border-2 border-red-600 bg-red-200 text-red-600 font-bold px-3 py-1">Inactive</button></td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-2 py-2">Marvin McKinney</td>
                        <td className="px-2 py-2">Tesla</td>
                        <td className="px-2 py-2">(252) 555-0126</td>
                        <td className="px-2 py-2">jmarvin@tesla.com</td>
                        <td className="px-2 py-2">Iran</td>
                        <td className="px-2 py-2"><button className="border-2 border-teal-600 bg-teal-200 text-teal-600 px-4 py-1">Active</button></td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-2 py-2">Jerome Bell</td>
                        <td className="px-2 py-2">Google</td>
                        <td className="px-2 py-2">(629) 555-0129</td>
                        <td className="px-2 py-2">jerome@google.com</td>
                        <td className="px-2 py-2">Réunion</td>
                        <td className="px-2 py-2"><button className="border-2 border-teal-600 bg-teal-200 text-teal-600 px-4 py-1">Active</button></td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-2 py-2">Kathryn Murphy</td>
                        <td className="px-2 py-2">Microsoft</td>
                        <td className="px-2 py-2">(406) 555-0120</td>
                        <td className="px-2 py-2">kathryn@microsoft.com</td>
                        <td className="px-2 py-2">Curaçao</td>
                        <td className="px-2 py-2"><button className="border-2 border-teal-600 bg-teal-200 text-teal-600 px-4 py-1">Active</button></td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-2 py-2">Jacob Jones</td>
                        <td className="px-2 py-2">Yahoo</td>
                        <td className="px-2 py-2">(208) 555-0112</td>
                        <td className="px-2 py-2">jacob@yahoo.com</td>
                        <td className="px-2 py-2">Brazil</td>
                        <td className="px-2 py-2"><button className="border-2 border-teal-600 bg-teal-200 text-teal-600 px-4 py-1">Active</button></td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-2 py-2">Kristin Watson</td>
                        <td className="px-2 py-2">Facebook</td>
                        <td className="px-2 py-2">(704) 555-0127</td>
                        <td className="px-2 py-2">kristin@facebook.com</td>
                        <td className="px-2 py-2">Åland Islands</td>
                        <td className="px-2 py-2"><button className="border-2 border-red-600 bg-red-200 text-red-600 font-bold px-3 py-1">Inactive</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}