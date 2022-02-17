---
sidebar_position: 2
---

# Start Here

Let's first walk through downloading the core dataset, what options are available and how we suggest you start with the data.

The rough flow for a typical researcher will be:

1. [Review and accept the terms of our license agreement.](#license-agreement)  (It takes 48 to receive credentials - do this first.)
1. [Download the CLI.](#cli-download)
1. [Select your subset of interest](#select-subset)
1. [Download The Data](#download-data)

## EGO4D License Agreement {#license-agreement}

Obtaining the dataset or any annotations requires you first review our license agreement and accept the terms.  [Go here (ego4ddataset.com)](https://ego4ddataset.com/) to review and execute this agreement, and you will be emailed a set of AWS access credentials when your license agreement is approved, which will take ~48hrs. In the meantime, you can check out data overview & sample notebooks here to get familiar with the dataset, and can download the CLI & dataloaders to get setup in advance.

Note that licenses have the option to execute our license agreements as either an individual or on behalf of your institution. Please carefully consider which approach is most appropriate in your context and engage the cognizant stakeholders at your institution as needed. Our license agreement contains important terms and conditions and should be reviewed carefully before execution.

Additionally, please note that EGO4D is led by an international consortium of 13 universities in partnership with Facebook AI. Each consortium member owns copyrights to the specific data they have collected as part of the initiative. Accordingly, researchers seeking access to EGO4D must individually execute 13 individual licenses with each university partner. Fortunately, all these licenses are essentially identical, simplifying the license reviewing and execution requirements. If you would like a copy of the license to review prior to signing, [go here](https://ego4d-data.org/pdfs/Ego4D-Licenses-Draft.pdf).

Also note that once approved your access credentials will expire in 14 days - you're expected to download the data locally, not to consume it from AWS.

Meta AI licenses annotations on all EGO4D data under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).


## Download The CLI {#cli-download}

Download the CLI from **[EGO4D CLI](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md)**

## Select Your Subset Of Interest {#select-subset}

For most purposes, you'll want to select the baseline, benchmark, scenario, or data type of interest first, and then specify the subset accordingly rather than downloading the full (> 5TB) dataset.  Please refer to the **[EGO4D CLI](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md)** documentation for the dataset commands, the approximate sizing below, and the [benchmark](./benchmarks/overview.md) and [annotation](./data/annotation-guidelines.md) documentation for details of what's available.

## Download The Data {#download-data}

Run the CLI to download the dataset (likely to a network share if you're download the full scale videos):

```
python -m ego4d.cli.cli --output_directory="~/ego4d_data" --datasets full_scale annotations
```


:::tip Visualization First
This would download the full 5 TB videos + annotations.  Use ```--datasets viz``` and follow the [visualization setup](https://github.com/facebookresearch/Ego4d/blob/main/viz/narrations/README.md) to explore the dataset before selecting which subset you're interested in.
:::


Note this is a video dataset and as such the downloads are large!  Approximate download size:

|  **Dataset**          | **Size**  |
|-----------------------|-----------|
|  **Full Dataset**     | ~ 5.5 TB  |
|                       |           |
|  **Data Types**       | **Size**  |
|  Full Scale Videos    | ~ 5 TB    |
|  Annotations          | ~ 2 GB    |
|  Benchmark Clips      | ~ 1 TB    |
|  Visualization Data   | ~ 500 MB  |
|                       |           |
|  **Benchmark Subset** | **Size**  |
|  Narrations Only      | ~ 350 MB  |
|  Forecasting Only     | ~         |
|  Hands & Objects Only | ~         |
|  Episodic Memory Only | ~         |
|  AV/Social Only       | ~         |

:::note Download Time
Average broadband speeds are in the ~100 Mbps ballpark.  For 5 TB, you're looking at ~5 days to download.
:::
