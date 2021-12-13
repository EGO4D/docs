---
sidebar_position: 2
---

# Start Here

Let's first walk through downloading the core dataset, what options are available and how we suggest you start with the data.  

The rough flow for a typical researcher will be:

1. [Sign the license.](#sign-the-license)  (It's takes 48 to receive credentials - do this first.)
1. [Download the CLI.](#Download-The-CLI)
1. [Select your subset of interest](#Select-Your-Subset-Of-Interest)
1. [Download The Data](#Download-The-Data)

## Sign The License

Obtaining the dataset or any annotations requires you first sign a license.  [Go here (ego4ddataset.com)](https://ego4ddataset.com/) to sign the license, and you will be emailed a set of AWS credentials when your signature is approved, which will take ~ 48 hrs.  (In the meantime, you can check out data overiew & sample notebooks here to get familiar with the dataset, and can download the CLI & dataloaders to get setup in advance.)

Note that you are signing the license as an individual, not for your university.  Also note that your credentials will expire in 14 days - you're expected to download the data locally, not to consume it from AWS.  If you would like a copy of the license to review prior to signing, [go here](https://ego4ddataset.com/).

## Download The CLI

Download the CLI from **[EGO4D CLI](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md)**

## Select Your Subset Of Interest

You likely won't want the full dataset!

## Download The Data

Run the CLI to download the dataset (likely to a network share if you're download the full scale videos):

```
python -m ego4d.cli.cli --output_directory="~/ego4d_data" --datasets full_scale annotations
```

:::tip Standard Dataset
This would download the full 5 TB videos + annotations.  Use ```--standard``` to get started with just the annotations and visualization data to explore the dataset before selecting which subset you're interested in.
:::


Note this is a video dataset and as such the downloads are large!  Approximate download size:

|  **Dataset**          | **Size**  | 
|-----------------------|-----------|
|  **Full Dataset**     | ~ 5.5 TB  |
|                       |           |
|  **Data Types**       | **Size**  |
|  Full Scale Videos    | ~ 5 TB    |
|  Annotations          | ~ 2 GB    |
|  Visualization Data   | ~ 500 MB  |
|                       |           |
|  **Benchmark Subset** | **Size**  |
|  Narrations Only      | ~ 350 MB  |
|  Forecasting Only     | ~         |
|  Hands & Objects Only | ~         |
|  Episodic Memory Only | ~         |
|  AV/Social Only       | ~         |

Note: Average broadband speeds are in the ~100 Mbps ballpark.  For 5 TB, you're looking at ~ 5 days to download. 
