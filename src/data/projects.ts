export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  body: string;
}

export const projects: Project[] = [
  {
    slug: "disease-forecasting",
    title: "Infectious Disease Forecasting",
    description: "Ensemble forecasting of respiratory diseases combining statistical and time-series models, achieving < 10% MAPE.",
    tags: ["Epidemiology", "PyTorch", "MLflow"],
    body: "A collaborative effort between Optum, Carnegie Mellon University, and the CDC to build a federated data suite for predicting infectious disease as if it were like the weather. Defined experimental logging pipelines via MLflow for ensemble forecasting of infectious respiratory diseases, combining ARIMA and Holt-Winters models to achieve less than 10% MAPE. Built on-prem Sqoop pipelines in Hive to source over 80 GB of infectious disease data daily, reducing latency by 65%.",
  },
  {
    slug: "hematology-attention-model",
    title: "Reverse-Time Attention for Hematology",
    description: "Custom PyTorch attention model on longitudinal hematology data, attaining 93% recall for identifying at-risk patients.",
    tags: ["Hematology", "Deep Learning", "Recurrent Modeling"],
    body: "Implemented a reverse-time attention model in PyTorch for morbid outcomes within longitudinal hematology data, attaining 93% recall in order to identify at-risk patients. Applied hyperparameter optimization with successive halving and early stopping using Ray. Logged model results using MLflow and set up distributed job triggers on AzureML compute clusters. Quantified performance tradeoffs and training time across vanilla RNN, GRU, and LSTM architectures, arriving at a 15% reduction in training time while maintaining an F1-score of 0.86. Benchmarked RandomForest and XGBoost models for classification of ECMO risk with 93% accuracy, using one-hot encoded ICD, CPT, and prescription data as features, and applied recursive feature elimination to reduce the number of features by 85%. Maintained a QA pipeline for data ingestion with Great Expectations on a Spark execution engine, ensuring 98% daily compliance. Constructed a dashboard in React for analyzing changes in patient risk distributions over time.",
  },
  {
    slug: "nlp-search-optimization",
    title: "Natural Language Layers for Data",
    description: "NLP search suite over enterprise data — entity recognition, Q&A, and retrieval-augmented generation contributing $12M to revenue growth.",
    tags: ["Semantic Models", "Reranking", "Query Generation"],
    body: "Contributed $12 million to top-line revenue growth through implementation of NLP search layers for enterprise data, including search optimization, entity recognition, and question-answering. Simplified the Azure Data Lake Storage Gen2 query layer with DuckDB and SQLAlchemy to enable fast retrieval over large-scale structured data. Built retrieval-augmented generation APIs in Flask and React, scaling internal applications to concurrently manage over 20,000 users.",
  },
  {
    slug: "genome-publication-identifier",
    title: "Genome-by-Publication Identifier",
    description: "Topic modeling package and Qt frontend for identifying genomic references from synthetic biology publications.",
    tags: ["NLP", "Synthetic Biology", "Biopython"],
    body: "Created a topic modeling package and Qt frontend for automatically identifying genomic and proteomic references from existing constructs mentioned in synthetic biology article publications. Linked results from PubMed to FASTA using the Biopython Entrez SDK. Sorted articles and constructs via cosine similarity by training a Gensim LDA topic model from a public article database, and deployed the construct identification NLP model to IBM Watson Cloud.",
  },
  {
    slug: "quorum-sensing-tools",
    title: "Computational Tools for Quorum Sensing Research",
    description: "Signal processing and image analysis tools for studying bacterial communication pathways in the Sgro Lab.",
    tags: ["Synthetic Biology", "MATLAB", "Python"],
    body: "Designed biological and digital signal processing tools used by lab members at the Sgro Laboratory at Boston University. Scripted MATLAB and Python image analysis tools via PIL for research conducted on bacterial quorum sensing pathways. Supported the research team in creating viral transfection protocols for B. subtilis and over 45 workflows for restriction enzyme digests. Named as Distinguished Summer Research Fellow, securing $10,000 in funding.",
  },
];
