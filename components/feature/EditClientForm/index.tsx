import { IClientPayload } from "@api/client/client.types"
import { useFormik } from "formik"

type EditClientFormProps = {
    data: IClientPayload
    onSubmit: (values: IClientPayload) => void
}

const EditClientForm: React.FC<EditClientFormProps> = ({ data, onSubmit }) => {
    const formik = useFormik<IClientPayload>({
        initialValues: {
            id: data.id,
            realm: data.realm,
            client_id: data.client_id,
            name: data.name,
            description: data.description,
            protocol: data.protocol,
            client_authenticator_type: data.client_authenticator_type,
            public_client: data.public_client,
            standard_flow_enabled: data.standard_flow_enabled,
            direct_access_grants_enabled: data.direct_access_grants_enabled,
            implicit_flow_enabled: data.implicit_flow_enabled,
            service_accounts_enabled: data.service_accounts_enabled,
            redirect_uris: data.redirect_uris,
            enabled: data.enabled,
        },
        onSubmit,
    })

    return (
        <form
            className="bg-white flex-1 max-w-5xl p-4 space-y-4 shadow-lg"
            onSubmit={formik.handleSubmit}
        >
            <div className="flex space-x-4">
                <div className="flex-1">
                    <label className="block mb-2 text-sm font-medium">
                        Client ID
                    </label>
                    <input
                        type="text"
                        id="client_id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter Client ID"
                        required
                        disabled
                        value={formik.values.client_id}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="flex-1">
                    <label className="block mb-2 text-sm font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter Name"
                        required
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            <div className="flex space-x-4">
                <div className="flex-1">
                    <label className="block mb-2 text-sm font-medium">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter Description"
                        required
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            <div>
                {formik.isSubmitting ? (
                    <button className="relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Submitting
                    </button>
                ) : (
                    <button
                        className="relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        type="submit"
                    >
                        Submit
                    </button>
                )}
            </div>
        </form>
    )
}

export default EditClientForm
