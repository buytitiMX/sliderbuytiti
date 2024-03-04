const { RichText } = wp.blockEditor;

export default function save({ attributes }) {
	return (
		<div className="my-slider">
			<div className="slider-container">
				{attributes.slides.map((slide, index) => (
					<div
						key={index}
						className="slide"
						style={{ backgroundColor: slide.color }}
					>
						<div className="container-gti">
							<div className="gtex">
								<div className="cont-h1">
									<RichText.Content className="box-h1 h1-slide-down" tagName="h1" value={slide.title} style={{ color: slide.h1Color }} />
								</div>
								<div className="cont-h5">
									<RichText.Content className="box-h5" tagName="h5" value={slide.h5} style={{ color: slide.h5Color }} />
								</div>
								<div className="cont-p">
									<RichText.Content className="box-p p-slide-right" tagName="p" value={slide.p} style={{ color: slide.pColor }} />
								</div>
								<div className="cont-b">
									<a className="ov-btn-grow-skew" href={slide.button}>
										Ver Más
									</a>
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
						<button key={index} className="nav-dot" />
					))}
				</div>
			</div>
		</div>
	);
}