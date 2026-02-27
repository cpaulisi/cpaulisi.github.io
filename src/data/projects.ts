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
    body: "Implemented a reverse-time attention model in PyTorch for morbid outcomes within longitudinal hematology data, attaining 93% recall in order to identify at-risk patients. Logged model results using MLflow and set up distributed job triggers on AzureML compute clusters. Quantified performance tradeoffs and training time across vanilla RNN, GRU, and LSTM architectures, arriving at a 15% reduction in training time while maintaining an F1-score of 0.86.",
  },
  {
    slug: "nlp-search-optimization",
    title: "Natural Language Layers for Data",
    description: "NLP search suite over enterprise data — entity recognition, Q&A, and retrieval-augmented generation contributing $12M to revenue growth.",
    tags: ["Semantic Models", "Reranking", "Query Generation"],
    body: "Contributed $12 million to top-line revenue growth through implementation of NLP search layers for enterprise data, including search optimization, entity recognition, and question-answering. Simplified the Azure Data Lake Storage Gen2 query layer with DuckDB and SQLAlchemy to enable fast retrieval over large-scale structured data. Built retrieval-augmented generation APIs in Flask and React, scaling internal applications to concurrently manage over 20,000 users.",
  },
];
