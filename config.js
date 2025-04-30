let topTitleDiv = "";

let titleDiv =
  "";

let bylineDiv = "";

let descriptionDiv =
  '<img src="images/logistic_process.png" style="max-width:50%; height:auto; display:block; margin:30px auto; border-radius:8px;">' +  
  '<p style="font-size:14px; color:#777; text-align:center; margin-top:10px; margin-bottom:50px;">Illustration: Logistics Process Overview</p>' +
  '<p>Online shopping has never been easier. With a few taps, packages arrive at our doorsteps—fast, cheap, frictionless. To keep up with this growing demand, New York City began reevaluating its delivery systems in the mid-2010s.</p>'+ 
  '<p>In 2019, the city released its Smart Truck Management Plan, proposing new ways to handle freight more efficiently. In 2021, it piloted micro-distribution hubs—small-scale transfer points for cargo bikes and electric vans—to reduce truck congestion in residential areas. Meanwhile, warehouses and fulfillment centers rapidly multiplied, often tucked into neighborhoods they once avoided.</p>' +
  '<p>But in chasing speed and convenience, one question remains: Where do these packages actually come from—and how do they get here?</p>'+ 
  '<p> </p>' +
  '<p style="text-align:center">Scroll to continue<br>▼</p>';

let footerDiv =
  '<p>This story is based on data by the <a href="http://web.mta.info/developers/turnstile.html">Metropolitan Transit Authority</a> and reporting by the <a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">New York Times</a>, <a href="https://ny.curbed.com/2020/3/24/21192454/coronavirus-nyc-transportation-subway-citi-bike-covid-19">Curbed</a>, and <a href="https://thecity.nyc/2020/03/subway-ridership-plunge-deepest-at-big-manhattan-stations.html">The City</a>.</p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a></p>';

let divChapter0 =
  "<h3>E-commerce Grows on the Backbone of Truck Routes</h3>" +
  '<img src="images/ECommerceDevelopment2.png">' +
  '<p class="imageCredit"><a href="https://www.nyc.gov/html/dot/downloads/pdf/smart-truck-management-plan.pdf">Data Source: Retail Indicators Branch, U.S. Census Bureau</a></p>' +
  "<p>Since 2008, e-commerce has grown more than fourfold in the U.S., rising from <strong>3.6%</strong> to <strong>16%</strong> of total retail sales by 2023. In New York City, this surge has transformed the logistics landscape, putting enormous pressure on urban freight systems.</p>" +
  "<p>Nationwide, <strong>over 90% of goods are transported by trucks</strong> at some point in their journey, and NYC is no exception. The city’s e-commerce boom has led to a dramatic increase in truck activity—<strong>freight transportation employment grew 29%</strong>, and <strong>warehousing and storage employment rose 382%</strong> over the past decade.</p>" +
  "<p>Despite this growth, the physical infrastructure has largely remained unchanged. Trucks continue to rely on a fixed network of designated truck routes to deliver goods across boroughs.</p>";

let divChapter6 =
  "<h3>The Legacy of Outdated Infrastructure <span style='color:#718BBF; font-weight:bold;'>(warehouse before 2020)</span></h3>" +
  '<img src="images/ECommerceDevelopment2.png">' +
  '<p class="imageCredit"><a href="https://www.nyc.gov/html/dot/downloads/pdf/smart-truck-management-plan.pdf">Delivering New York, A Smart Truck Management Plan for New York City</a></p>' +
  "<p>Before 2020, New York City's logistics landscape was shaped by aging warehouses built for a different era. These facilities were not equipped for the demands of fast, high-volume, last-mile delivery — laying the foundation for today’s growing logistics challenges.</p>" +
  "<p></p>";


let divChapter1 =
  "<h3>The E-Commerce Boom and the Rise of <span style='color:#FFA500; font-weight:bold;'>New Warehouses</span></h3>" +
  '<img src="images/delivery_trucks.png">' +
  '<p class="imageCredit"><a href="https://citylimits.org/freight-trucks-traffic-nyc/">Jeanmarie Evelly</a></p>' +
  "<p>The COVID-19 pandemic marked a turning point in the evolution of urban logistics.</p>" +
  "<p>In 2020, as lockdowns swept across the United States, consumers rapidly shifted to online shopping — pushing e-commerce sales up by 43% in a single year, from $571 billion in 2019 to $815 billion in 2020, according to the U.S. Census Bureau.</p>" +
  "<p>To meet surging demand for fast, last-mile delivery, logistics companies rushed to build warehouses in all five boroughs — particularly in outer areas like Queens, Brooklyn, and the Bronx. This rapid infrastructure expansion helped keep the city’s supply chains moving, but it also introduced new spatial and environmental pressures that are still unfolding today.</p>";

let divChapter7 =
  "<h3>Freight Traffic Follows the Warehouses</h3>" +
  '<img src="images/AADTheatmap.png">' +
  "<p>Warehouses don’t operate in isolation — they draw in trucks.</p>" +
  "<p>As e-commerce reshaped the physical distribution network, the city also experienced a rise in truck traffic volume along key routes.</p>" +
  "<p>Heatmaps of Annual Average Daily Truck Traffic (AADT) reveal a strong spatial correlation: areas with dense warehouse clusters also see the heaviest truck flows.</p>";

let divChapter2 =
  "<h3>Who Lives Near These Warehouses?</h3>" +
  '<img src="images/truckdelivery5.png">' +
  '<p class="imageCredit"><a href="https://nyc.streetsblog.org/2023/04/10/pols-and-advocates-want-to-redesign-the-citys-truck-network">STREETBLOG NYC</a></p>' +
  "<p>The communities most affected by freight infrastructure are often those with the fewest resources to resist it.</p>" +
  "<p>Overlaying truck volumes and warehouse locations with income data reveals a stark pattern: <span style='color:#ED1111; '>low-income neighborhoods</span>, such as those in the South Bronx, East New York, and Southeast Queens, are disproportionately exposed to environmental and health risks.</p>" +
  "<p>These areas already face challenges like housing insecurity and limited access to healthcare — the added burden of logistics infrastructure deepens long-standing urban inequalities.</p>";

let divChapter3 =
  "<h3><span style='color:#1E548E;'>Communities of Color</span> on the Front Lines</h3>" +
  '<img src="images/race&income&Warehouse.png">' +
  "<p>Environmental burdens also reflect racial divides. Many warehouses are located near predominantly Black, Hispanic, and Asian neighborhoods — especially in the Bronx, Queens, and Brooklyn.</p>" +
  "<p>These patterns trace back to long-standing zoning laws and land use decisions that have concentrated industrial activity in communities of color, reinforcing cycles of environmental injustice.</p>";

let divChapter4 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Overall collapse of subway usage</h3>" +
  '<div style="max-width:1200px; margin-left:auto; margin-right:auto"><img src="images/WeekdaySubway.svg"></div>' +
  "<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'><a href='https://qri.cloud/nyc-transit-data/turnstile_daily_counts_2020'>NYC Subway Turnstile Counts - 2020 (Qri)</a></p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>As can be seen in the chart above, subway usage collapsed abruptly right after the first COVID-19 case was documented in the city. It was in fact the declaration of a state of emergency, on March 7, 2020, that precipitated this near total drop in subway ridership.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>After a few weeks of the declaration of state of emergency, subway usage in the city reached its lowest point, almost 90% less than the same time period the year before. Since then, the number of people that use the subway has remained drastically low. Even after the city began its re-opening scheme on June 8, 2020, subway usage was still more than 70% below 2019 levels.</p>" +
  '<div style="max-width:600px; margin-left:auto; margin-right:auto"><iframe title="vimeo-player" src="https://player.vimeo.com/video/529512696" width="600" height="277.5" frameborder="0" allowfullscreen></iframe></div>' +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>This difference, however, varies across the city, with some parts of it seeing a much steeper decline and others witnessing a stronger recovery. Nevertheless, even a year after the pandemic first hit New York City, the number of daily subway commuters remains below 2019 levels.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>That being said, other transportation networks have fared differently. For example, after a similar decline right after the state of emergency was declared, Citibike has seen its number of users reach and even surpass 2019 levels. City buses, on the other hand, also remain underutilized compared to their usage pre-pandemic.</p>";

let divChapter5 =
  "<h3>The South Bronx, as Always</h3>" +
  '<img src="images/Chapter_4_Image.jpg">' +
  '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

var config = {
  style: "mapbox://styles/wen3/cm9g592vs00ho01qkgjqf8f12",
  // leave commented to use Mapbox Standard Style
  accessToken: "pk.eyJ1Ijoid2VuMyIsImEiOiJjbTZpZGk0dDYwNnhqMm1vaGNtc2pyc29pIn0.R1YUPm_wlHzWpnWvsp8dIQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  insetOptions: {
    markerColor: "orange",
  },
  insetPosition: "bottom-right",
  theme: "light",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [ 
    {
      id: "warehouse-before2020",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter6,
      location: {
        center: [-74.00, 40.725],
        zoom: 10.8,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      onChapterEnter: [
        { layer: "warehouse2020after", opacity: 0 },
        { layer: "warehouseBefore2020", opacity: 0.7 },
        { layer: "warehouseAll", opacity: 0 },
        { layer: "warehouseAllBufferFill", opacity: 0 },
        { layer: "warehouseAllBufferOutline", opacity: 0 },
        { layer: "communityOfColor", opacity: 0 },
        { layer: "medianIncome", opacity: 0 },
        { layer: "truckAADT-heatmap", opacity: 0 },
        { layer: "comments-layer", opacity: 0 }
      ],
      onChapterExit: []  
    },
    {
      id: "warehouse-after2020",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-74.00, 40.725],
        zoom: 10.8,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      onChapterEnter: [
        { layer: "warehouse2020after", opacity: 0.9 },
        { layer: "warehouseBefore2020", opacity: 0.7 },
        { layer: "warehouseAll", opacity: 0 },
        { layer: "warehouseAllBufferFill", opacity: 0 },
        { layer: "warehouseAllBufferOutline", opacity: 0 },
        { layer: "communityOfColor", opacity: 0 },
        { layer: "medianIncome", opacity: 0 },
        { layer: "truckAADT-heatmap", opacity: 0 },
      ],
      onChapterExit: [
        { layer: "warehouse2020after", opacity: 0 },
      ]
    },
    {
      id: "warehouse-buffer-only",
      alignment: "left",
      hidden: false,
      chapterDiv: 
      `<h3>Expanding Footprints: Warehouses and Their Impact Zones</h3>
      <p>Warehouses impact more than just their own lots.</p>
    
      <img src="images/warehousenyc.png" style="max-width:100%; height:auto; display:block; margin:20px auto; border-radius:6px;">
      <p class="imageCredit">Figure: Buffer zones showing warehouse influence areas</p>
    
      <p>Mapped buffer zones show that nearby neighborhoods — well beyond the site itself — face more truck traffic, noise, and pollution.</p>
      <p>Freight infrastructure once confined to industrial zones is now spilling into residential and mixed-use areas.</p>`,
     
      location: {
        center: [-74.00, 40.725],  // 你可以微调这个位置
        zoom: 10.8,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      onChapterEnter: [
        { layer: "warehouseBefore2020", opacity: 0 },
        { layer: "warehouseAll", opacity: 1 },
        { layer: "warehouseAllBufferFill", opacity: 0.1 },
        { layer: "warehouseAllBufferOutline", opacity: 0.6 },
        { layer: "communityOfColor", opacity: 0 },
        { layer: "medianIncome", opacity: 0 },
        { layer: "truckAADT-heatmap", opacity: 0 },
      ],
      onChapterExit: []
    },    
    {
      id: "truck-volume",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter7,
      location: {
        center: [-74.00, 40.725],
        zoom: 10.8,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      onChapterEnter: [
        { layer: "truckAADT-heatmap", opacity: 0.8 },  // 开热力图
        { layer: "warehouseAll", opacity: 1 },
        { layer: "warehouseAllBufferFill", opacity: 0.1 },
        { layer: "warehouseAllBufferOutline", opacity: 0.6 },
        { layer: "communityOfColor", opacity: 0 },
        { layer: "medianIncome", opacity: 0 },
      ],
      onChapterExit: [
        { layer: "truckAADT-heatmap", opacity: 0 }  // 关热力图
      ]
    },
    {
      id: "incomeUnderlay",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter2,
      location: {
        center: [-74.00, 40.725],
        zoom: 10.8,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      onChapterEnter: [
        { layer: "medianIncome", opacity: 0.35 },
        { layer: "warehouseAll", opacity: 1},
        { layer: "warehouseAllBufferFill", opacity: 0.1 },
        { layer: "warehouseAllBufferOutline", opacity: 0.6 },
        { layer: "communityOfColor", opacity: 0 },
      ],
      onChapterExit: [
        { layer: "medianIncome", opacity: 0 },
      ]
    },
    {
      id: "community-of-color",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter3,
      location: {
        center: [-74.00, 40.725],
        zoom: 10.8,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [
        { layer: "warehouseAll", opacity: 1 },
        { layer: "warehouseAllBufferFill", opacity: 0.1 },
        { layer: "warehouseAllBufferOutline", opacity: 0.6 },
        { layer: "communityOfColor", opacity: 0.8 },
        { layer: "comments-layer", opacity: 0},

      ],
      onChapterExit: [ ]
    },

    {
      id: "community-comments",
      alignment: "left",
      hidden: false,
      chapterDiv: `
        <h3>Residents Speak Out</h3>
        <img src="images/Top Complaint Types in Truck Route Feedback.png">
        <img src="images/legend- comments.png">
        <p>Public comments across New York City highlight widespread concerns about the impact of freight movement on neighborhood life. Truck-related issues — including illegal routing, speeding, idling, and poor signage — account for the largest share of complaints (966), followed by safety concerns (891), particularly involving conflicts with pedestrians and cyclists, and public health issues (271), often citing asthma and noise.</p>
        <p>Mapped across the city, these complaints cluster around warehouse zones and major truck corridors. </p>
      `,
      location: {
        center: [-74.00, 40.725],
        zoom: 10.8,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      onChapterEnter: [
        { layer: "warehouseAll", opacity: 1 },
        { layer: "warehouseAllBufferFill", opacity: 0.1 },
        { layer: "warehouseAllBufferOutline", opacity: 0.6 },
        { layer: "comments-layer", opacity: 0.7 },
        { layer: "communityOfColor", opacity: 0 },
      ],
      onChapterExit: [
      ]
    },

    {
      id: "community-photos",
      alignment: "left",
      hidden: false,
      chapterDiv: `
        <h3>Daily Life Scenes Near Warehouses</h3>
        <p>By overlaying data on warehouse locations, truck volumes, income levels, and racial demographics, we identified several communities most affected by freight activity.</p>
        <p>To bring these numbers to life, we collected real images and reports from these areas — ranging from news coverage to public complaints — capturing how logistics infrastructure intersects with daily life.</p>
      `,
      location: {
        center: [-74.00, 40.725],
        zoom: 10.8,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      onChapterEnter: [
        { layer: "warehouseAll", opacity: 0 },
        { layer: "warehouseAllBufferFill", opacity: 0 },
        { layer: "warehouseAllBufferOutline", opacity: 0 },
        { callback: "addPhotoMarkers" },
        { layer: "flushing-warehouse-layer", opacity: 0 }, 
        { layer: "flushing-housing-layer", opacity: 0 },
        { layer: "prince-street-line", opacity: 0 },
        { layer: "comments-layer", opacity: 0 }
      ],
      onChapterExit: [
        { callback: "removePhotoMarkers" }
      ]
    },
    
    {
      id: "zoom-to-flushing",
      alignment: "left",
      hidden: false,
      chapterDiv: `
        <h3>Focus on Flushing</h3>
        <p>Flushing, Queens, is one of the communities most affected by overlapping freight activity.</p>
        <p>Despite its dense residential population and rich cultural identity, it sits at the intersection of several major truck routes and industrial zones.</p>
        <p>Warehouses, apartment buildings coexist within just a few blocks — creating daily frictions between logistics infrastructure and local life.</p>
      `,
      location: {
        center: [-73.837, 40.765],
        zoom: 15.5,
        pitch: 40,
        bearing: -5
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [
        { layer: "flushing-warehouse-layer", opacity: 1 },  // ✅ 小楼出现
        { layer: "flushing-housing-layer", opacity: 1 },
        { layer: "prince-street-fill", opacity: 0 },     // 灰色填充，半透明
        { layer: "prince-street-outline", opacity: 0 }     // 黑色描边，实心
      ],
      onChapterExit: []
    },
    
    {
      id: "focus-prince-street",
      alignment: "left",
      hidden: false,
      chapterDiv: `
        <h3>Prince Street: A Closer Look</h3>
        <p>Prince Street in Flushing is one of the key corridors for warehouse activities and truck movements. Residents report trucks blocking crosswalks, making tight turns onto narrow roads, and idling for long hours.</p>
        <p>As a microcosm of freight’s urban footprint, Prince Street shows how infrastructure decisions ripple into walkability, safety, and public space access.</p>
      `,
      location: {
        center: [-73.835, 40.765], 
        zoom: 16.3,               
        pitch: 0,                  
        bearing: 0            
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [
        { layer: "flushing-warehouse-layer", opacity: 1 },
        { layer: "flushing-housing-layer", opacity: 1 },
        { layer: "prince-street-fill", opacity: 0.5 },     // 灰色填充，半透明
        { layer: "prince-street-outline", opacity: 1 },   // 黑色描边，实心
        { callback: "showMap" }
      ],
      onChapterExit: []
    },    
    
    {
      id: "prince-flat",
      alignment: "full",     // ✅ 全屏铺满，防止边上留白
      hidden: false,
      chapterDiv: `
      <div id="prince-flat-container" style="position: relative; width: 100%; height: 300vh; overflow: hidden;">
        <img src="images/prince-street(1)(1).jpg" id="prince-flat-image" 
          style="position: fixed; top: 43%; left: 62.5%; width: 50%; height: auto; transform: translate(-50%, -50%); object-fit: contain; opacity: 0; transition: opacity 3s ease; z-index: 20;">
      </div>
    `,
    
      location: {
        center: [-73.835, 40.765],
        zoom: 16.3,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      onChapterEnter: [
        { layer: "flushing-warehouse-layer", opacity: 0 },
        { layer: "flushing-housing-layer", opacity: 0 },
        { layer: "prince-street-fill", opacity: 0 },
        { layer: "prince-street-outline", opacity: 0 },
        { callback: "fadeInPrinceFlatImage" }
      ],
      onChapterExit: [
        { layer: "flushing-warehouse-layer", opacity: 1 },
        { layer: "flushing-housing-layer", opacity: 1 },
        { layer: "prince-street-fill", opacity: 0.5 },  // 如果之前是半透明
        { layer: "prince-street-outline", opacity: 1 },
        { callback: "fadeOutPrinceFlatImage" }
      ]},

      {
        id: "long-scroll",
        alignment: "full",
        hidden: false,
        chapterDiv: `
        <div id="long-scroll-container" style="position: relative; width: 100%; min-height: 200vh; overflow: hidden; background-color: white;">
          <img src="images/flushingstreet.png" id="long-scroll-image"
            style="position: relative; width: 100%; height: auto; margin-top: 0px; opacity: 0; transition: opacity 5s ease;">
        
        <video class="floating-item" style="top: 200px; left: 20%; width: 500px;" controls>
          <source src="sitephotos/IMG_9468.MOV" type="video/mp4">
          Your browser does not support the video tag.
        </video>

        <img src="sitephotos/IMG_9461.jpg" class="floating-item" style="top: 1000px; left: 20%; width: 500px;">

        <audio class="floating-item" style="top: 1600px; left: 18%; width: 400px;" controls>
          <source src="sitephotos/34-12 Linneaus Pl copy.m4a" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>

        <img src="sitephotos/IMG_9462.jpg" class="floating-item" style="top: 2000px; left: 20%; width: 500px;">
        <img src="sitephotos/IMG_9467.jpg" class="floating-item" style="top: 3000px; left: 20%; width: 500px;">
        <img src="sitephotos/IMG_9561.HEIC" class="floating-item" style="top: 3500px; left: 20%; width: 500px;">



        </div>

        `,
        location: {
          center: [-73.835, 40.765], // 📍 这里可以随便写一个，不重要
          zoom: 16.3,
          pitch: 0,
          bearing: 0
        },
        mapAnimation: "flyTo",
        onChapterEnter: [
          { callback: "fadeInLongScrollImage" }
        ],
        onChapterExit: [{ callback: "fadeOutLongScrollImage" }]
      },      
      
      
  ],
};