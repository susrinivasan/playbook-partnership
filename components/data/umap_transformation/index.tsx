import python from '@/utils/python'
import { BokehPlot } from '@/components/viz/bokeh'
import { MetaNode } from '@/spec/metanode'
import { GeneCountMatrix } from '@/components/data/gene_count_matrix'

export const UMAPBokehPlotFromGeneCountMatrix = MetaNode.createProcess('UMAPBokehPlotFromGeneCountMatrix')
  .meta({
    label: 'UMAP Bokeh Plot From Gene Count Matrix',
    description: 'Construct UMAP bokeh plot From gene count matrix',
  })
  .codec()
  .inputs({ matrix: GeneCountMatrix })
  .output(BokehPlot)
  .resolve(async (props) => await python(
      'components.data.umap_transformation.umap_transformation',
    { kargs: [props.inputs.matrix]  },
  ))
  .build()
