report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/gihyo_ui_component_Balloon_4_0_document_0_pc.png",
        "test": "../bitmaps_test/20180626-182532/gihyo_ui_component_Balloon_4_0_document_0_pc.png",
        "selector": "document",
        "fileName": "gihyo_ui_component_Balloon_4_0_document_0_pc.png",
        "label": "Balloon 4文字ラベル",
        "misMatchThreshold": 1e-10,
        "url": "http://localhost:9001/iframe.html?selectedKind=Balloon&selectedStory=4文字ラベル",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "gihyo_ui_component"
});