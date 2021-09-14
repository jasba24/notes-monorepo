import { Helmet } from 'react-helmet'

const HelmetTitle = ({ page }) => (
  <>
    <Helmet>
      <title>{page} | Notes App</title>
    </Helmet>
  </>
)

export default HelmetTitle
