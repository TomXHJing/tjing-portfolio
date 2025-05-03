//  src\pages\project docs\SSIM.jsx
 
import NavBar from '../../components/NavBar';
import LoadingScreen from '../../components/LoadingScreen';
import BGRender from '../../components/BGRender';

export default function SSIM() {
  return (
    <main>
      <div className="fixed inset-0 -z-10">
        <BGRender filePath={null} turn={null} />
      </div>
      <div className="relative min-h-screen overflow-x-hidden overflow-y-scroll no-scrollbar py-5 text-fore-light dark:text-fore-dark">
        <LoadingScreen />
        <NavBar />
        <div className="relative h-[5.5rem] w-full"></div>

        <section className="max-w-4xl mx-auto px-6 py-8 space-y-6 bg-white/10 backdrop-blur-sm rounded-xl">
          <h1 className="text-4xl font-bold">SSIM: Salish Sea Initiative Map</h1>
          <h2 className="text-xl text-gray-500 dark:text-gray-400">Interactive mapping and Indigenous marine planning</h2>

          <img className="w-full h-full" id="SSIM page image" src="/SSIM/SSIM.JPG"/>

          <p>
            The Salish Sea Initiative Interactive Map (SSIM) is a collaborative platform co-developed with 33 First Nations across British Columbia to visualize cultural and ecological marine data. Developed by Fisheries and Oceans Canada in collaboration with Trailmark Systems, the map supports Indigenous-led stewardship through interactive spatial data tools.
          </p>

          <h3 className="text-2xl font-semibold">Role & Contributions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Worked as a GIS Analyst and later Frontend Developer during dual EOS and CompSci major at UVic</li>
            <li>Managed map layer integration and performed data sourcing, transformation, and QA</li>
            <li>Used ArcGIS and QGIS to refine and convert large spatial datasets from CSV to GeoJSON</li>
            <li>Authored and formatted educational and wiki-style map feature info panels</li>
            <li>Built and debugged cross-browser AJAX-heavy PHP frontend with Bootstrap UI</li>
            <li>Integrated MySQL-backed search, data display, and layer toggling</li>
            <li>Resolved compatibility issues (e.g., Firefox), updated map layers and responsive behavior</li>
            <li>Collaborated using Git (Trailmark repo), Jira ticketing, and Microsoft SharePoint for documentation</li>
          </ul>

          <h3 className="text-2xl font-semibold">Features & Purpose</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Interactive marine map with 225+ data layers (treaty zones, ferry routes, critical habitats, etc.)</li>
            <li>Mapbox + ArcGIS Server backend for dynamic vector + raster layer delivery</li>
            <li>Supports OCAP-compliant data governance for First Nations</li>
            <li>Search tools, embedded PDF factsheets, cultural annotations, and live spatial queries</li>
          </ul>

          <h3 className="text-2xl font-semibold">Technology Stack</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Frontend:</strong> HTML, CSS, Bootstrap, JavaScript, AJAX</li>
            <li><strong>Backend:</strong> PHP, MySQL, Composer</li>
            <li><strong>Mapping:</strong> Mapbox GL JS, ArcGIS Server, QGIS, GeoJSON</li>
            <li><strong>Infra & Tools:</strong> Apache, NGINX, Git, Jira, SharePoint</li>
          </ul>

          <h3 className="text-2xl font-semibold">Partners</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fisheries and Oceans Canada</li>
            <li>Trailmark Systems</li>
            <li>33 participating First Nations</li>
            <li>Presented at Salish Sea Ecosystem Conference 2022</li>
          </ul>

          {/* Image carousel linking to public/SSIM/ folder */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-2">Project Media</h3>
            <div className="flex gap-4 overflow-x-scroll no-scrollbar">
              {['map1.jpg', 'map2.JPG', 'map3.png'].map((file, idx) => (
                <a key={idx} href={`/SSIM/${file}`} target="_blank" rel="noopener noreferrer">
                  <img src={`/SSIM/${file}`} alt={`SSIM ${idx + 1}`} className="w-64 h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </section>
        
      </div>
    </main>
  );
}