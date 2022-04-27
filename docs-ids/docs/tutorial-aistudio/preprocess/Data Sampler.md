### 组件介绍
**“数据抽样”（Data Sampler）**控件实现了多种采样方法对输入数据集进行抽样。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - smp：抽样后的数据集
  - rmn：来自输入数据集的所有其他数据（不包含抽样后的数据）

<hr/>


### 页面介绍
点击**“数据抽样”（Data Sampler）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/preprocess/data-sampler/param.png) ](/img/aistudio/preprocess/data-sampler/param.png)


#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>抽样类型</td> 
      <td>
      固定比例：采样的数据集大小为整个数据集大小乘以设定的百分比<br/>
      固定样本大小：采样的数据集大小为设定的数量（每次采样总是基于整个数据集进行采样，不会减去已经采样处的子集中的实例）<br/>
      交叉验证：将数据数据集分区为互补子集，用户可以在其中选择样本集折数进行数据采样<br/>
      自助式抽样法
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>其它选项</td> 
      <td>
      根据需求选择是否可重复抽样以及分层抽样
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“数据信息”（Data Info）**控件查看加载数据的信息，同时使用**“数据抽样”（Data Sampler）**控件进行数据采样，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/preprocess/data-sampler/workflow.png) ](/img/aistudio/preprocess/data-sampler/workflow.png)

在案例中加载 titanic 数据集，使用了固定比例的采样方式进行数据采样，采样比例设定为20%。案例中控件的配置以及执行结果如下图所示。      
[ ![](/img/aistudio/preprocess/data-sampler/workflow-result.png) ](/img/aistudio/preprocess/data-sampler/workflow-result.png)