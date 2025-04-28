let topTitleDiv = "";

let titleDiv =
  "";

let bylineDiv = "";

let descriptionDiv =
  '<img src="images/logistic_process.png" style="max-width:50%; height:auto; display:block; margin:30px auto; border-radius:8px;">' +  
  '<p style="font-size:14px; color:#777; text-align:center; margin-top:10px; margin-bottom:50px;">Illustration: Logistics Process Overview</p>' +
  '<p>As New York City expands its last-mile delivery infrastructure to meet growing demand, concerns are mounting in residential neighborhoods where narrow streets are ill-suited for heavy truck traffic. Residents in warehouse-heavy areas report worsening air quality, higher asthma rates, more congestion, and greater risks to pedestrian safety.</p>'+ 
  '<p>In places like the South Bronx and East New York, trucks clog local streets and idle outside homes, making daily life harder and less safe. While policymakers debate new regulations, residents are urging faster action to protect their health and neighborhoods.</p>' +
  '<p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p>' +
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
  "<h3>Existing Warehouses before 2020</h3>" +
  '<img src="images/ECommerceDevelopment2.png">' +
  '<p class="imageCredit"><a href="https://www.nyc.gov/html/dot/downloads/pdf/smart-truck-management-plan.pdf">Delivering New York, A Smart Truck Management Plan for New York City</a></p>' +
  "<p>Older warehouses still dominate much of the logistics landscape.</p>" +
  "<p>Most pre-2020 facilities <strong>were not designed for rapid turnover, high-density storage, or last-mile proximity.</strong> </p>";

let divChapter1 =
  "<h3>The Rise of NYC's Delivery Infrastructure - New Warehouses since 2020</h3>" +
  '<img src="images/delivery_trucks.png">' +
  '<p class="imageCredit"><a href="https://citylimits.org/freight-trucks-traffic-nyc/">Jeanmarie Evelly</a></p>' +
  "<p>Over the past decade, the rise of e-commerce has radically transformed New York City’s logistics landscape. With the explosion of next-day and same-day delivery, companies have built dozens of new warehouses across the five boroughs — especially in outer areas like Queens, Brooklyn, and the Bronx.</p>" +
  "<p>Recent construction continues to intensify environmental burdens in underserved areas.</p>";

let divChapter7 =
  "<h3>Where the Warehouses Go, the Trucks Follow</h3>" +
  '<img src="images/chart6.png">' +
  "<p>This layer shows the total truck traffic AADT, with circle size proportional to volume.</p>" +
  "<p>Warehouses—both old and new—tend to cluster in areas with high AADT, intensifying the impact on adjacent communities.</p>" +
  "<p>This overlap between warehouse density and AADT hotspots signals a spatial pattern of compounded impact.</p>";

let divChapter2 =
  "<h3>Who Lives Near These Warehouses?</h3>" +
  '<img src="images/truckdelivery5.png">' +
  '<p class="imageCredit"><a href="https://nyc.streetsblog.org/2023/04/10/pols-and-advocates-want-to-redesign-the-citys-truck-network">STREETBLOG NYC</a></p>' +
  "<p>This map overlays median household income data across New York City. You can clearly see that many warehouses — especially the newer ones — are concentrated in lower-income areas such as the South Bronx, East New York, and Southeast Queens. These communities are already burdened with housing insecurity, limited access to health care, and poor air quality. The clustering of truck-heavy infrastructure in these neighborhoods raises serious concerns of environmental injustice.</p>";

let divChapter3 =
  "<h3>Freight Infrastructure in Communities of Color</h3>" +
  '<img src="images/race&income&Warehouse.png">' +
  '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>This map compares warehouse locations with racial demographics across New York City. It shows that many warehouses, especially in the Bronx, Queens, and Brooklyn, are located near neighborhoods with large Black, Hispanic, and Asian populations.</p>" +
  "<p>These areas, such as Elmhurst, South Bronx, and East New York, are racially diverse and often have lower median incomes. This pattern reflects how industrial zones and warehouse developments are concentrated in certain parts of the city, shaped by long-standing land use and zoning policies.</p>";

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
        { layer: "truckAADT-heatmap", opacity: 0 }
      ],
      onChapterExit: [
        { layer: "warehouse2020after", opacity: 0 },
      ]
    },
    {
      id: "warehouse-buffer-only",
      alignment: "left",
      hidden: false,
      chapterDiv: "<h3>All Warehouses and Buffer Zones</h3><p>This view highlights the general spread of warehouses without distinguishing year or size, alongside buffer zones representing potential impact areas.</p>",
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
        { layer: "truckAADT-heatmap", opacity: 0 }
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
        { layer: "communityOfColor", opacity: 0 }
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
      ],
      onChapterExit: [
        { layer: "communityOfColor", opacity: 0 },
      ]
    },

    {
      id: "community-photos",
      alignment: "left",
      hidden: false,
      chapterDiv: `
        <h3>Daily Life Scenes Near Warehouses</h3>
        <p>Here are a few glimpses of the communities living in the shadow of warehouses and truck routes.</p>
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
        { layer: "prince-street-line", opacity: 0 }
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
        <p>Flushing, located in Queens, is one of the key communities affected by truck routes and warehouse developments. Let's zoom in for a closer look.</p>
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
        <p>Prince Street in Flushing is one of the key corridors for warehouse activities and truck movements. Let's switch to a flat view and zoom in for a detailed look.</p>
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
      }
      
  ],
};