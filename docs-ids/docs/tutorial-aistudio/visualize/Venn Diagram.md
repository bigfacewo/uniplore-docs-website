### 组件介绍
**“维恩图（Venn Diagram）”**控件用于绘制数据子集的维恩图。
<hr/>

- 输入：
  - data: 数据集
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“维恩图（Venn Diagram）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/visualize/venn-diagram/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
![visualization](/img/aistudio/visualize/venn-diagram/visualization.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>信息</td> 
      <td>
      输入数据集信息
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>数据实例标识</td> 
      <td>
      用于比较数据的标识符
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，连接**“数据抽样（Data Sampler）”**进行抽样，接着使用**“维恩图（Venn Diagram）”**控件连接**“加载文件（File）”**和**“数据抽样（Data Sampler）”**的输出绘制韦恩图。  
![workflow](/img/aistudio/visualize/venn-diagram/workflow.png)

案例中加载“iris”数据集，其余控件使用默认参数配置。案例中控件的配置以及执行结果如下图所示。
![workflow-result](/img/aistudio/visualize/venn-diagram/workflow-result.png)