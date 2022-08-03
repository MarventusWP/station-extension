import { useTranslation } from "react-i18next"
import { Page, Card } from "components/layout"
import TxContext from "../TxContext"
import TaxParamsContext from "./TaxParams"
import ExecuteContractForm from "./ExecuteContractForm"

const ExecuteContractTx = () => {
  const { t } = useTranslation()

  return (
    <Page title={t("Execute")} small>
      <Card>
        <TxContext>
          <TaxParamsContext>
            <ExecuteContractForm />
          </TaxParamsContext>
          <ExecuteContractForm />
        </TxContext>
      </Card>
    </Page>
  )
}

export default ExecuteContractTx
