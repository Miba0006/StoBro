var wms_layers = [];

var lyr_ortofoto_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ortofoto<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ortofoto_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1385092.049939, 7498391.928304, 1385464.599125, 7498568.441695]
        })
    });
var format_Stibro_Samlet_punkter_QGIS_1 = new ol.format.GeoJSON();
var features_Stibro_Samlet_punkter_QGIS_1 = format_Stibro_Samlet_punkter_QGIS_1.readFeatures(json_Stibro_Samlet_punkter_QGIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stibro_Samlet_punkter_QGIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stibro_Samlet_punkter_QGIS_1.addFeatures(features_Stibro_Samlet_punkter_QGIS_1);
var lyr_Stibro_Samlet_punkter_QGIS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stibro_Samlet_punkter_QGIS_1, 
                style: style_Stibro_Samlet_punkter_QGIS_1,
                popuplayertitle: 'Stibro_Samlet_punkter_QGIS',
                interactive: true,
    title: 'Stibro_Samlet_punkter_QGIS<br />\
    <img src="styles/legend/Stibro_Samlet_punkter_QGIS_1_0.png" /> -0,291 - -0,031<br />\
    <img src="styles/legend/Stibro_Samlet_punkter_QGIS_1_1.png" /> -0,031 - -0,006<br />\
    <img src="styles/legend/Stibro_Samlet_punkter_QGIS_1_2.png" /> -0,006 - 0,006<br />\
    <img src="styles/legend/Stibro_Samlet_punkter_QGIS_1_3.png" /> 0,006 - 0,026<br />\
    <img src="styles/legend/Stibro_Samlet_punkter_QGIS_1_4.png" /> 0,026 - 0,191<br />' });

lyr_ortofoto_0.setVisible(true);lyr_Stibro_Samlet_punkter_QGIS_1.setVisible(true);
var layersList = [lyr_ortofoto_0,lyr_Stibro_Samlet_punkter_QGIS_1];
lyr_Stibro_Samlet_punkter_QGIS_1.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', });
lyr_Stibro_Samlet_punkter_QGIS_1.set('fieldImages', {'field_1': 'Range', 'field_2': 'Range', 'field_3': 'Range', 'field_4': 'TextEdit', 'field_5': 'CheckBox', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', });
lyr_Stibro_Samlet_punkter_QGIS_1.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'header label - visible with data', });
lyr_Stibro_Samlet_punkter_QGIS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});