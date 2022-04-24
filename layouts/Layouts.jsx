import Navbar from '../components/Navbar'

function Layouts({children}) {
  return (
    <>
        <div className="px-16 md:px-64 lg:px-96">
            {children}
            <Navbar />
        </div>
    </>
  )
}

export default Layouts