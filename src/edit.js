import React, { useState, useEffect } from "react";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, ColorPicker } from "@wordpress/components";
import { TextControl } from "@wordpress/components";
import { MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const MySlider = ({ attributes, setAttributes }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const updateSlideContent = (index, key, newValue) => {
		const newSlides = attributes.slides.map((slide, i) =>
			i === index ? { ...slide, [key]: newValue } : slide,
		);
		setAttributes({ ...attributes, slides: newSlides });
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) =>
				prevSlide === attributes.slides.length - 1 ? 0 : prevSlide + 1,
			);
		}, 5000);

		return () => clearInterval(interval);
	}, [attributes.slides.length]);

	return (
		<div className="my-slider">
			<InspectorControls>
				<PanelBody title="Configuración de Slides">
					{attributes.slides.map((slide, index) => (
						<React.Fragment key={index}>
							<RichText
								tagName="h1"
								label={`Título del Slide ${index + 1}`}
								value={slide.title}
								onChange={(newTitle) =>
									updateSlideContent(index, "title", newTitle)
								}
							/>
							<ColorPicker
								color={slide.h1Color}
								onChangeComplete={(newColor) =>
									updateSlideContent(index, "h1Color", newColor.hex)
								}
							/>
							<RichText
								tagName="h5"
								label={`H5 del Slide ${index + 1}`}
								value={slide.h5}
								onChange={(newH5) => updateSlideContent(index, "h5", newH5)}
							/>
							<ColorPicker
								color={slide.h5Color}
								onChangeComplete={(newColor) =>
									updateSlideContent(index, "h5Color", newColor.hex)
								}
							/>
							<RichText
								tagName="p"
								label={`P del Slide ${index + 1}`}
								value={slide.p}
								onChange={(newP) => updateSlideContent(index, "p", newP)}
							/>
							<ColorPicker
								color={slide.pColor}
								onChangeComplete={(newColor) =>
									updateSlideContent(index, "pColor", newColor.hex)
								}
							/>
							<TextControl
								label={`URL del botón del Slide ${index + 1}`}
								value={slide.button}
								onChange={(newButton) =>
									updateSlideContent(index, "button", newButton)
								}
							/>
							<ColorPicker
								color={slide.color}
								onChangeComplete={(newColor) =>
									updateSlideContent(index, "color", newColor.hex)
								}
							/>
							<MediaUpload
								onSelect={(media) =>
									updateSlideContent(index, "image", media.url)
								}
								allowedTypes={["image"]}
								value={slide.image}
								render={({ open }) => (
									<button onClick={open}>Seleccionar imagen</button>
								)}
							/>
						</React.Fragment>
					))}
					<Button
			isPrimary
			onClick={() => {
				const newSlides = [...attributes.slides, {
					title: "",
					h5: "",
					p: "",
					button: "",
					image: "",
					color: "",
					h1Color: "",
					h5Color: "",
					pColor: ""
				}];
				setAttributes({ ...attributes, slides: newSlides });
			}}
		>
			Añadir Slide
		</Button>
				</PanelBody>
			</InspectorControls>

			<div className="slider-container">
				{attributes.slides.map((slide, index) => (
					<div
						key={index}
						className={`slide ${index === currentSlide ? "active" : ""}`}
						style={{ backgroundColor: slide.color }}
					>
						<div className="container-gti">
							<div className="gtex">
								<div className="cont-h1">
									<RichText.Content
										className="box-h1 h1-slide-down"
										tagName="h1"
										value={slide.title}
										style={{ color: slide.h1Color }}
									/>
								</div>
								<div className="cont-h5">
									<RichText.Content
										className="box-h5"
										tagName="h5"
										value={slide.h5}
										style={{ color: slide.h5Color }}
									/>
								</div>
								<div className="cont-p">
									<RichText.Content
										className="box-p p-slide-right"
										tagName="p"
										value={slide.p}
										style={{ color: slide.pColor }}
									/>
								</div>
								<div className="cont-b">
									<button
										className="ov-btn-grow-skew"
										onClick={() => (window.location.href = slide.button)}
									>
										Ver Más
									</button>
								</div>
							</div>
							<div className="gimage">
								<img className="img-zoom-in" src={slide.image} alt="" />
							</div>
						</div>
					</div>
				))}
				<div className="slider-nav">
					{attributes.slides.map((slide, index) => (
						<button
							key={index}
							className={`nav-dot ${index === currentSlide ? "active" : ""}`}
							onClick={() => setCurrentSlide(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MySlider;