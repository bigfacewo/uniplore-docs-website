### 组件介绍
**“对应分析（Correspondence Analysis）”**控件用于对分类多变量数据进行对应分析。Correspondence Analysis（CA）根据输入数据集，计算其对应的线性变换。和 PCA 相似，CA 被用来计算离散数据而非连续数据的线性变换。
<hr/>

- 输入：
  - data：数据集
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“对应分析（Correspondence Analysis）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/visualize/correspondence-analysis/param.png) ](/img/aistudio/visualize/correspondence-analysis/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
[ ![](/img/aistudio/visualize/correspondence-analysis/visualization.png) ](/img/aistudio/visualize/correspondence-analysis/visualization.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>离散属性</td> 
      <td>
      列出数据集中的所有离散属性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>坐标轴</td> 
      <td>
      坐标轴
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>惯量贡献</td> 
      <td>
      说明对于分析各个维度的结果能够解释列联表中两变量联系的程度
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，再通过**“对应分析（Correspondence Analysis）”**控件进行分析。  
[ ![](/img/aistudio/visualize/correspondence-analysis/workflow.png) ](/img/aistudio/visualize/correspondence-analysis/workflow.png)

案例中加载“titanic”数据集，案例中控件的配置以及执行结果如下图所示，**“对应分析（Correspondence Analysis）”**控件将多个变量绘制到二维图形上，以便于看出变量值之间的关系。  
[ ![](/img/aistudio/visualize/correspondence-analysis/workflow-result.png) ](/img/aistudio/visualize/correspondence-analysis/workflow-result.png)