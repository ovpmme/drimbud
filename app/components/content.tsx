"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

export default function Content({ data }: { data: any }) {

    {/** Gallery */}
		const [currentIndexGallery, setCurrentIndexGallery] = useState(0);
		const [galleryPerSlide, setGalleryPerSlide] = useState(1);

		const extendedGallery = [...data.content[0]?.article[0]?.gallery, ...data.content[0]?.article[0]?.gallery, ...data.content[0]?.article[0]?.gallery];

		const prevGallery = () => {
			setCurrentIndexGallery((prevIndex) => (prevIndex - 1 + data.content[0]?.article[0]?.gallery.length) % data.content[0]?.article[0]?.gallery.length);
		};

		const nextGallery = () => {
			setCurrentIndexGallery((prevIndex) => (prevIndex + 1) % data.content[0]?.article[0]?.gallery.length);
		};
		{/** 
		useEffect(() => {
			const timer = setInterval(nextGallery, 999999999);
			return () => clearInterval(timer);
		}, []);
		*/}
		useEffect(() => {
			const updateItemsPerSlide = () => {
			  if (window.innerWidth <= 640) {
				setGalleryPerSlide(1);
			  } else {
				setGalleryPerSlide(1);
			  }
			};
		
			updateItemsPerSlide();
			window.addEventListener("resize", updateItemsPerSlide);
		
			return () => window.removeEventListener("resize", updateItemsPerSlide);
		  }, []);

    {/** Tips */}
		const [currentIndexTips, setCurrentIndexTips] = useState(0);
		const [tipsPerSlide, setTipsPerSlide] = useState(2);

		const extendedTips = [...data.content[0]?.article[0]?.tips[0]?.list, ...data.content[0]?.article[0]?.tips[0]?.list, ...data.content[0]?.article[0]?.tips[0]?.list];

		const prevTips = () => {
			setCurrentIndexTips((prevIndex) => (prevIndex - 1 + data.content[0]?.article[0]?.tips[0]?.list.length) % data.content[0]?.article[0]?.tips[0]?.list.length);
		};

		const nextTips = () => {
			setCurrentIndexTips((prevIndex) => (prevIndex + 1) % data.content[0]?.article[0]?.tips[0]?.list.length);
		};
		{/** 
		useEffect(() => {
			const timer = setInterval(nextTips, 999999999);
			return () => clearInterval(timer);
		}, []);
		*/}
		useEffect(() => {
			const updateItemsPerSlide = () => {
			  if (window.innerWidth <= 640) {
				setTipsPerSlide(1);
			  } else {
				setTipsPerSlide(2);
			  }
			};
		
			updateItemsPerSlide();
			window.addEventListener("resize", updateItemsPerSlide);
		
			return () => window.removeEventListener("resize", updateItemsPerSlide);
		  }, []);

		{/** Objects */}
			const [currentIndexObjects, setCurrentIndexObjects] = useState(0);
			const [objectsPerSlide, setObjectsPerSlide] = useState(2);

			const extendedObjects = [...data.content[0]?.objects[0]?.items, ...data.content[0]?.objects[0]?.items, ...data.content[0]?.objects[0]?.items];

			const prevObjects = () => {
				setCurrentIndexObjects((prevIndex) => (prevIndex - 1 + data.content[0]?.objects[0]?.items.length) % data.content[0]?.objects[0]?.items.length);
			};
	
			const nextObjects = () => {
				setCurrentIndexObjects((prevIndex) => (prevIndex + 1) % data.content[0]?.objects[0]?.items.length);
			};
			{/** 
			useEffect(() => {
				const timer = setInterval(nextObjects, 999999999);
				return () => clearInterval(timer);
			}, []);
			*/}
			useEffect(() => {
				const updateItemsPerSlide = () => {
				  if (window.innerWidth <= 640) {
					setObjectsPerSlide(1);
				  } else {
					setObjectsPerSlide(2);
				  }
				};
			
				updateItemsPerSlide();
				window.addEventListener("resize", updateItemsPerSlide);
			
				return () => window.removeEventListener("resize", updateItemsPerSlide);
			  }, []);

		{/** Reviews */}
			const [currentIndexReviews, setCurrentIndexReviews] = useState(0);
			const [reviewsPerSlide, setReviewsPerSlide] = useState(4);

			const extendedReviews = [...data.content[0]?.reviews[0]?.items, ...data.content[0]?.reviews[0]?.items, ...data.content[0]?.reviews[0]?.items];

			const prevReviews = () => {
				setCurrentIndexReviews((prevIndex) => (prevIndex - 1 + data.content[0]?.reviews[0]?.items.length) % data.content[0]?.reviews[0]?.items.length);
			};

			const nextReviews = () => {
				setCurrentIndexReviews((prevIndex) => (prevIndex + 1) % data.content[0]?.reviews[0]?.items.length);
			};
			{/** 
			useEffect(() => {
				const timer = setInterval(nextReviews, 999999999);
				return () => clearInterval(timer);
			}, []);
			*/}
			useEffect(() => {
				const updateItemsPerSlide = () => {
				  if (window.innerWidth <= 640) {
					setReviewsPerSlide(1);
				  } else {
					setReviewsPerSlide(4);
				  }
				};
			
				updateItemsPerSlide();
				window.addEventListener("resize", updateItemsPerSlide);
			
				return () => window.removeEventListener("resize", updateItemsPerSlide);
			  }, []);

		{/** Clients */}
			const [currentIndexClients, setCurrentIndexClients] = useState(0);
			const [clientsPerSlide, setClientsPerSlide] = useState(6);

			const extendedClients = [...data.content[0]?.clients[0]?.items, ...data.content[0]?.clients[0]?.items, ...data.content[0]?.clients[0]?.items];

			const prevClients = () => {
				setCurrentIndexClients((prevIndex) => (prevIndex - 1 + data.content[0]?.clients[0]?.items.length) % data.content[0]?.clients[0]?.items.length);
			};

			const nextClients = () => {
				setCurrentIndexClients((prevIndex) => (prevIndex + 1) % data.content[0]?.clients[0]?.items.length);
			};
			{/** 
			useEffect(() => {
				const timer = setInterval(nextClients, 999999999);
				return () => clearInterval(timer);
			}, []);
			*/}
			useEffect(() => {
				const updateItemsPerSlide = () => {
				  if (window.innerWidth <= 640) {
					setClientsPerSlide(2);
				  } else {
					setClientsPerSlide(6);
				  }
				};
			
				updateItemsPerSlide();
				window.addEventListener("resize", updateItemsPerSlide);
			
				return () => window.removeEventListener("resize", updateItemsPerSlide);
			  }, []);

	return (
		<>
			{data.content.map((content: any) => (
				<div
					className="
						w-full
						h-fit

						bg-white
					"
					key={content.id}
				>
					{/** Category */}
						{content.category.map((item: any) => (
							<div
								className="
									relative

									w-full
									h-fit

									px-8
									xl:px-16
									2xl:px-64
									py-8
								"
								key={item.id}
							>
								<div
									className="
										absolute

										left-0
										top-0

										w-full
										h-24

										opacity-40
										blur-2xl
									"
									style={{
										backgroundImage: `linear-gradient(to right, ${item.gradientFrom}, ${item.gradientTo})`
									}}
								>
								</div>
								<div
									className="
										relative

										w-full
										h-fit

										flex
										flex-col
										xl:flex-row
										2xl:flex-row

										justify-between
										items-start
										xl:items-center
										2xl:items-center

										gap-2
										xl:gap-0
										2xl:gap-0
									"
								>
									<div
										className="
											w-fit
											h-fit

											rounded-full

											px-3
											py-1.5

											flex
											flex-row

											justify-center
											items-center

											gap-2
										"
										style={{
											backgroundImage: `linear-gradient(to right, ${item.gradientFrom}, ${item.gradientTo})`
										}}
									>
										<p
											className="
												text-xs
												xl:text-sm
												2xl:text-sm
												text-white

												font-medium

												text-start
											"
										>
											{item.category}
										</p>
										<Image
											className="
												filter
												invert

												select-none
											"
											src={item.src}
											width={12}
											height={12}
											alt={item.alt}
										/>
										<p
											className="
												text-xs
												xl:text-sm
												2xl:text-sm
												text-white

												font-normal

												text-start
											"
										>
											{item.service}
										</p>
									</div>
									<p
										className="
											text-xs
											xl:text-sm
											2xl:text-sm
											text-black

											font-medium

											text-start
										"
									>
										{item.date}
									</p>
								</div>
							</div>
						))}
					{/** Article & Aside */}
						<div
							className="
								w-full
								h-fit

								px-8
								xl:px-16
								2xl:px-64
								py-8

								flex
								flex-col-reverse
								xl:flex-row
								2xl:flex-row

								gap-8
							"
						>
							{/** Article */}
								{content.article.map((article: any)=> (
									<div
										className="
											w-full
											xl:w-[960px]
											2xl:w-[960px]
											h-fit

											flex
											flex-col

											gap-8
										"
										key={article.id}
									>
										<h1
											className="
												text-xl
												xl:text-4xl
												2xl:text-4xl
												text-neutral-800

												font-medium

												text-start
											"
										>
											{article.title}
										</h1>
										{article.whatIs.map((item: any) => (
											<div
												className="
													w-full
													h-fit

													flex
													flex-col

													gap-2
												"
												key={item.id}
												id="whatIs"
											>
												<h2
													className="
														text-lg
														xl:text-2xl
														2xl:text-2xl
														text-neutral-600

														font-normal

														text-start
													"
												>
													{item.title}
												</h2>
												<p
													className="
														text-base
														text-neutral-800

														font-normal

														text-justify
													"
												>
													{item.paragraph}
												</p>
											</div>
										))}
										{article.forWhat.map((item: any) => (
											<div
												className="
													w-full
													h-fit

													flex
													flex-col

													gap-2
												"
												key={item.id}
												id="forWhat"
											>
												<h2
													className="
														text-lg
														xl:text-2xl
														2xl:text-2xl
														text-neutral-600

														font-normal

														text-start
													"
												>
													{item.title}
												</h2>
												<p
													className="
														text-base
														text-neutral-800

														font-normal

														text-justify
													"
												>
													{item.paragraph}
												</p>
											</div>
										))}
										<div
											className="
												w-full
												h-fit

												flex
												flex-col
												xl:flex-row
												2xl:flex-row

												justify-center
												items-center
												xl:items-start
												2xl:items-start

												gap-2
											"
										>
											<div
												className="
													min-w-fit
													min-h-fit

													bg-white

													border
													border-neutral-200
													hover:border-neutral-400

													rounded-full

													hover:shadow-xl

													transition
													duration-300

													px-2
													py-2

													cursor-pointer
												"
												onClick={prevGallery}
											>
												<Image
													className="
														select-none
													"
													src="/icons/chevron-left.svg"
													width={32}
													height={32}
													alt="Попереднє зображення"
												/>
											</div>
											{extendedGallery.slice(currentIndexGallery, currentIndexGallery + galleryPerSlide).map((item: any, index: number) => (
												<div
													className="
														w-full
														h-fit

														border
														border-neutral-200

														rounded-xl

														shadow-sm

														flex
														flex-col
													"
													key={index}
												>
													<Image
														className="
															w-full
															h-fit

															rounded-t-xl

															select-none
														"
														src={item.src}
														width={0}
														height={0}
														sizes="100vw"
														alt={item.alt}
														loading="lazy"
													/>
													<p
														className="
															w-full
															h-fit

															p-4

															text-base
															text-neutral-800

															font-normal

															text-justify
														"
													>
														{item.description}
													</p>
												</div>
											))}
											<div
												className="
													min-w-fit
													min-h-fit

													bg-white

													border
													border-neutral-200
													hover:border-neutral-400

													rounded-full

													hover:shadow-xl

													transition
													duration-300

													px-2
													py-2

													cursor-pointer
												"
												onClick={nextGallery}
											>
												<Image
													className="
														select-none
													"
													src="/icons/chevron-right.svg"
													width={32}
													height={32}
													alt="Наступне зображення"
												/>
											</div>
										</div>
										{article.tips.map((tips: any) => (
											<div
												className="
													w-full
													h-fit

													flex
													flex-col

													gap-8
												"
												key={tips.id}
												id="tips"
											>
												<h2
													className="
														text-lg
														xl:text-2xl
														2xl:text-2xl
														text-neutral-600

														font-normal

														text-start
													"
												>
													{tips.title}
												</h2>
												<div
													className="
														w-full
														h-full

														flex
														flex-col
														xl:flex-row
														2xl:flex-row

														justify-center
														items-center
														xl:items-start
														2xl:items-start

														gap-2
													"
												>
													<div
														className="
															min-w-fit
															min-h-fit

															bg-white

															border
															border-neutral-200
															hover:border-neutral-400

															rounded-full

															hover:shadow-xl

															transition
															duration-300

															px-2
															py-2

															cursor-pointer
														"
														onClick={prevTips}
													>
														<Image
															className="
																select-none
															"
															src="/icons/chevron-left.svg"
															width={32}
															height={32}
															alt="Попереднє зображення"
														/>
													</div>
													{extendedTips.slice(currentIndexTips, currentIndexTips + tipsPerSlide).map((list: any) => (
														<div
															className="
																w-full
																h-fit

																border
																border-neutral-200

																rounded-xl

																shadow-sm

																px-4
																py-4

																flex
																flex-col

																gap-4
															"
															key={list.id}
														>
															<p
																className="
																	text-base
																	text-neutral-600

																	font-medium

																	text-center
																"
															>
																{list.title}
															</p>
															<div
																className="
																	w-full
																	h-px

																	bg-neutral-200
																"
															>
															</div>
															<ul
																className="
																	flex
																	flex-col

																	gap-2
																"
															>
																{list.item.map((item: any) => (
																	<li
																		key={item.id}
																	>
																		<p
																			className="
																				text-base
																				text-neutral-800

																				font-normal

																				text-justify
																			"
																		>
																			{item.paragraph}
																		</p>
																	</li>
																))}
															</ul>
														</div>
													))}
													<div
														className="
															min-w-fit
															min-h-fit

															bg-white

															border
															border-neutral-200
															hover:border-neutral-400

															rounded-full

															hover:shadow-xl

															transition
															duration-300

															px-2
															py-2

															cursor-pointer
														"
														onClick={nextTips}
													>
														<Image
															className="
																select-none
															"
															src="/icons/chevron-right.svg"
															width={32}
															height={32}
															alt="Наступне зображення"
														/>
													</div>
												</div>
											</div>
										))}
										{article.table.map((table: any) => (
											<div
												className="
													w-full
													h-fit

													flex
													flex-col

													gap-2
												"
												key={table.id}
												id="table"
											>
												<h2
													className="
														text-lg
														xl:text-2xl
														2xl:text-2xl
														text-neutral-600

														font-normal

														text-start
													"
												>
													{table.title}
												</h2>
												<table>
													<thead>
														<tr
															className="
																h-8

																border-b
																border-neutral-200
															"
														>
															{table.thead.map((item: any) => (
																<th
																	className="
																		text-base
																		text-neutral-600

																		font-medium

																		text-start

																		whitespace-nowrap
																		xl:whitespace-nowrap
																		2xl:whitespace-nowrap
																	"
																	key={item.id}
																	scope="col"
																>
																	{item.title}
																</th>
															))}
														</tr>
													</thead>
													<tbody>
														{table.tbody.map((item: any) => (
															<tr
																className="
																	h-8

																	border-b
																	border-neutral-200
																"
																key={item.id}
															>
																<td
																	className="
																		text-base
																		text-neutral-800

																		font-normal

																		text-start

																		whitespace-normal
																		xl:whitespace-normal
																		2xl:whitespace-normal
																	"
																>
																	{item.paragraph}
																</td>
																<td
																	className="
																		text-base
																		text-neutral-800

																		font-normal

																		text-start

																		whitespace-normal
																		xl:whitespace-nowrap
																		2xl:whitespace-nowrap
																	"
																>
																	{item.time}
																</td>
																<td
																	className="
																		text-base
																		text-neutral-800

																		font-normal

																		text-start

																		whitespace-normal
																		xl:whitespace-nowrap
																		2xl:whitespace-nowrap
																	"
																>
																	{item.price}
																</td>
															</tr>
														))}
													</tbody>
												</table>
											</div>
										))}
										{article.howTo.map((item: any) => (
											<div
												className="
													w-full
													h-fit

													flex
													flex-col

													gap-2
												"
												key={item.id}
												id="howTo"
											>
												<h2
													className="
														text-lg
														xl:text-2xl
														2xl:text-2xl
														text-neutral-600

														font-normal

														text-start
													"
												>
													{item.title}
												</h2>
												<p
													className="
														text-base
														text-neutral-800

														font-normal

														text-justify
													"
												>
													{item.paragraph}
												</p>
											</div>
										))}
										{article.howMuch.map((item: any) => (
											<div
												className="
													w-full
													h-fit

													flex
													flex-col

													gap-2
												"
												key={item.id}
												id="howMuch"
											>
												<h2
													className="
														text-lg
														xl:text-2xl
														2xl:text-2xl
														text-neutral-600

														font-normal

														text-start
													"
												>
													{item.title}
												</h2>
												<p
													className="
														text-base
														text-neutral-800

														font-normal

														text-justify
													"
												>
													{item.paragraph}
												</p>
											</div>
										))}
									</div>
								))}
							{/** Divider */}
								<div
									className="
										sticky

										top-8

										w-px
										h-screen

										bg-neutral-200

										hidden
										xl:flex
										2xl:flex
									"
								>
								</div>
							{/** Aside */}
								{content.aside.map((aside: any) => (
									<div
										className="
											xl:sticky
											2xl:sticky

											xl:top-32
											2xl:top-32

											w-full
											xl:w-1/4
											2xl:w-1/4
											h-fit

											flex
											flex-col

											gap-8
										"
										key={aside.id}
									>
										{aside.tableOfContents.map((tableOfContents: any) => (
											<div
												className="
													w-full
													h-fit

													border
													border-neutral-200

													rounded-xl

													shadow-sm

													px-4
													py-4

													flex
													flex-col

													gap-4
												"
												key={tableOfContents.id}
											>
												<p
													className="
														text-xl
														text-neutral-600

														font-medium

														text-center
													"
												>
													{tableOfContents.title}
												</p>
												<div
													className="
														w-full
														h-px

														bg-neutral-200
													"
												>
												</div>
												<ul
													className="
														flex
														flex-col

														gap-2
													"
												>
													{tableOfContents.anchors.map((item: any) => (
														<li
															className="
																text-base
																text-neutral-800

																font-normal

																text-justify
															"
															key={item.id}
														>
															<a
																href={item.href}
															>
																{item.paragraph}
															</a>
														</li>
													))}
												</ul>
											</div>
										))}
										{aside.usefulInformation.map((usefulInformation: any) => (
											<div
												className="
													w-full
													h-fit

													border
													border-neutral-200

													rounded-xl

													shadow-sm

													px-4
													py-4

													flex
													flex-col

													gap-4
												"
												key={usefulInformation.id}
											>
												<p
													className="
														text-xl
														text-neutral-600

														font-medium

														text-center
													"
												>
													{usefulInformation.title}
												</p>
												<div
													className="
														w-full
														h-px

														bg-neutral-200
													"
												>
												</div>
												<ul
													className="
														flex
														flex-col

														gap-2
													"
												>
													{usefulInformation.list.map((item: any) => (
														<li
															key={item.id}
														>
															<div
																className="
																	w-full
																	h-fit

																	flex
																	flex-row

																	justify-between
																	items-center
																"
															>
																<Image
																	className="
																		select-none
																	"
																	src={item.src}
																	width={18}
																	height={18}
																	alt={item.alt}
																/>
																<p
																	className="
																		text-base
																		text-neutral-800

																		font-normal

																		text-start
																	"
																>
																	{item.title}
																</p>
															</div>
														</li>
													))}
												</ul>
											</div>
										))}
										{aside.specialist.map((item: any) => (
											<div
												className="
													w-full
													h-fit

													border
													border-neutral-200

													rounded-xl

													shadow-sm

													px-4
													py-4

													flex
													flex-row

													justify-center
													items-center

													gap-4
												"
												key={item.id}
											>
												<Image
													className="
														w-16
														h-16

														border
														border-neutral-200

														rounded-full
														
														shadow-sm

														select-none
													"
													src={item.src}
													width={32}
													height={32}
													alt={item.alt}
												/>
												<div
													className="
														w-full
														h-fit

														flex
														flex-col

														gap
													"
												>
													<p
														className="
															text-base
															text-neutral-800

															font-medium

															text-start
														"
													>
														{item.name}
													</p>
													<p
														className="
															text-base
															text-neutral-600

															font-normal

															text-start
														"
													>
														{item.position}
													</p>
												</div>
											</div>
										))}
									</div>
								))}
						</div>
					{/** Objects */}
						{content.objects.map((objects: any) => (
							<div
								className="
									w-full
									h-fit

									px-8
									xl:px-16
									2xl:px-64
									py-8

									flex
									flex-col

									gap-8
								"
								key={objects.id}
							>
								<h3
									className="
										text-xl
										xl:text-4xl
										2xl:text-4xl
										text-neutral-800

										font-nortmal

										text-center
									"
								>
									{objects.title}
								</h3>
								<div
									className="
										w-full
										h-fit

										flex
										flex-col
										xl:flex-row
										2xl:flex-row

										justify-center
										items-center
										xl:items-start
										2xl:items-start

										gap-2
									"
									>
									<div
										className="
											min-w-fit
											min-h-fit

											bg-white

											border
											border-neutral-200
											hover:border-neutral-400

											rounded-full

											hover:shadow-xl

											transition
											duration-300

											px-2
											py-2

											cursor-pointer
										"
										onClick={prevObjects}
									>
										<Image
											className="
												select-none
											"
											src="/icons/chevron-left.svg"
											width={32}
											height={32}
											alt="Попереднє зображення"
										/>
									</div>
									{extendedObjects.slice(currentIndexObjects, currentIndexObjects + objectsPerSlide).map((item: any, index: number) => (
										<div
											className="
												w-full
												h-fit

												border
												border-neutral-200

												rounded-xl

												shadow-sm

												flex
												flex-col
											"
											key={index}
										>
											<Image
												className="
													w-full
													h-fit

													rounded-t-xl

													select-none
												"
												src={item.src}
												width={0}
												height={0}
												sizes="100vw"
												alt={item.alt}
												loading="lazy"
											/>
											<p
												className="
													w-full
													h-fit

													p-4

													text-base
													text-neutral-800

													font-normal

													text-justify
												"
											>
												{item.description}
											</p>
										</div>
									))}
									<div
										className="
											min-w-fit
											min-h-fit

											bg-white

											border
											border-neutral-200
											hover:border-neutral-400

											rounded-full

											hover:shadow-xl

											transition
											duration-300

											px-2
											py-2

											cursor-pointer
										"
										onClick={nextObjects}
									>
										<Image
											className="
												select-none
											"
											src="/icons/chevron-right.svg"
											width={32}
											height={32}
											alt="Наступне зображення"
										/>
									</div>
								</div>
							</div>
						))}
					{/** Reviews */}
						{content.reviews.map((reviews: any) => (
							<div
								className="
									w-full
									h-fit
									px-8
									xl:px-16
									2xl:px-64
									py-8

									flex
									flex-col

									gap-8
								"
								key={reviews.id}
							>
								<h3
									className="
										text-xl
										xl:text-4xl
										2xl:text-4xl
										text-neutral-800

										font-nortmal

										text-center
									"
								>
									{reviews.title}
								</h3>
								<div
									className="
										w-full
										h-fit

										flex
										flex-col
										xl:flex-row
										2xl:flex-row

										justify-center
										items-center
										xl:items-start
										2xl:items-start

										gap-2
									"
									>
									<div
										className="
											min-w-fit
											min-h-fit

											bg-white

											border
											border-neutral-200
											hover:border-neutral-400

											rounded-full

											hover:shadow-xl

											transition
											duration-300

											px-2
											py-2

											cursor-pointer
										"
										onClick={prevReviews}
									>
										<Image
											className="
												select-none
											"
											src="/icons/chevron-left.svg"
											width={32}
											height={32}
											alt="Попереднє зображення"
										/>
									</div>
									{extendedReviews.slice(currentIndexReviews, currentIndexReviews + reviewsPerSlide).map((item: any, index: number) => (
										<div
											className="
												w-full
												h-fit

												border
												border-neutral-200

												rounded-xl

												shadow-sm

												px-4
												py-4

												flex
												flex-col

												gap-4
											"
											key={index}
										>
											<p
												className="
													text-base
													text-neutral-600

													font-medium

													text-center
												"
											>
												{item.name}
											</p>
											<div
												className="
													w-full
													h-px

													bg-neutral-200
												"
											>
											</div>
											<p
												className="
													text-base
													text-neutral-800

													font-normal

													text-justify
												"
											>
												{item.comment}
											</p>
										</div>
									))}
									<div
										className="
											min-w-fit
											min-h-fit

											bg-white

											border
											border-neutral-200
											hover:border-neutral-400

											rounded-full

											hover:shadow-xl

											transition
											duration-300

											px-2
											py-2

											cursor-pointer
										"
										onClick={nextReviews}
									>
										<Image
											className="
												select-none
											"
											src="/icons/chevron-right.svg"
											width={32}
											height={32}
											alt="Наступне зображення"
										/>
									</div>
								</div>
							</div>
						))}
					{/** Clients */}
						{content.clients.map((clients: any) => (
							<div
								className="
									w-full
									h-fit

									px-8
									xl:px-16
									2xl:px-64
									py-8

									flex
									flex-col

									gap-8
								"
								key={clients.id}
							>
								<h3
									className="
										text-xl
										xl:text-4xl
										2xl:text-4xl
										text-neutral-800

										font-nortmal

										text-center
									"
								>
									{clients.title}
								</h3>
								<div
									className="
										w-full
										h-fit

										flex
										flex-row
										xl:flex-row
										2xl:flex-row

										justify-center
										items-center

										gap-2
									"
									>
									<div
										className="
											min-w-fit
											min-h-fit

											bg-white

											border
											border-neutral-200
											hover:border-neutral-400

											rounded-full

											hover:shadow-xl

											transition
											duration-300

											px-2
											py-2

											cursor-pointer
										"
										onClick={prevClients}
									>
										<Image
											className="
												select-none
											"
											src="/icons/chevron-left.svg"
											width={32}
											height={32}
											alt="Попереднє зображення"
										/>
									</div>
									{extendedClients.slice(currentIndexClients, currentIndexClients + clientsPerSlide).map((item: any, index: number) => (
										<div
											className="
												w-full
												h-fit

												flex
												flex-col

												justify-between
												items-center
											"
											key={index}
										>
											<Image
												className="
													w-auto
													h-auto

													select-none
												"
												src={item.src}
												width={0}
												height={0}
												sizes="100vw"
												alt={item.alt}
											/>
										</div>
									))}
									<div
										className="
											min-w-fit
											min-h-fit

											bg-white

											border
											border-neutral-200
											hover:border-neutral-400

											rounded-full

											hover:shadow-xl

											transition
											duration-300

											px-2
											py-2

											cursor-pointer
										"
										onClick={nextClients}
									>
										<Image
											className="
												select-none
											"
											src="/icons/chevron-right.svg"
											width={32}
											height={32}
											alt="Наступне зображення"
										/>
									</div>
								</div>
							</div>
						))}
				</div>
			))}
		</>
	);
}