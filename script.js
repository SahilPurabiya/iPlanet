function NeededBarlow() {
	const pixelSize = parseFloat(document.getElementById("pixelSize").value);
	const seeingCondition = parseFloat(document.getElementById("SCondition").value);
	const focalRatio = parseFloat(document.getElementById("fRatio").value);
  
	// Perform the calculation
	const result = Math.round(pixelSize * seeingCondition / focalRatio);
  
	// Display the result
	document.getElementById("result1").textContent =
	  "Needed Barlow: " + result + "x";
  }
  
  function FocalRatioNeeded() {
	const pixelSize = parseFloat(document.getElementById("pixelSize").value);
	const seeingCondition = parseFloat(document.getElementById("SCondition").value);
	const barlow = parseFloat(document.getElementById("barlow").value);
  
	// Perform the calculation
	const result = Math.round(pixelSize * seeingCondition / barlow);
  
	// Display the result
	document.getElementById("result2").textContent =
	  "Focal Ratio Needed: f/" + result;
  }
  
  function PixelSizeNeeded() {
	const seeingCondition = parseFloat(document.getElementById("SCondition").value);
	const focalRatio = parseFloat(document.getElementById("fRatio").value);
	const barlow = parseFloat(document.getElementById("barlow").value);
  
	// Perform the calculation
	const result = Math.round(barlow * focalRatio / seeingCondition);
  
	// Display the result
	document.getElementById("result3").textContent =
	  "Pixel Size Needed: " + result + "μm";
  }
  