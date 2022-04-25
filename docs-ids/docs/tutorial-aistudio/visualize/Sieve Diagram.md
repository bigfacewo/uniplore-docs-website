### 组件介绍
**“筛图（Sieve Diagram）”**控件用于绘制及展示一对属性的筛图。筛图是在双向列联表中将频率可视化的图形方法，并将其与独立假设下的预期频率进行比较。
<hr/>

- 输入：
  - data: 输入的数据集
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“筛图（Sieve Diagram）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/visualize/sieve-diagram/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
![visualization](/img/aistudio/visualize/sieve-diagram/visualization.png)

在上图中，每个矩形的面积与期望的频率成正比，用颜色表示与独立性的偏差是正值（蓝色）还是负值（红色），其中颜色的深浅表征频率和期望频率之间的差异程度（与标准 Pearson 残差成正比）。

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>属性选择</td> 
      <td>
      选择要在筛图中显示的属性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>组合分数</td> 
      <td>
      可以找到最佳的属性组合
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，接着使用**“筛图（Sieve Diagram）”**控件绘制筛图。   
![workflow](/img/aistudio/visualize/sieve-diagram/workflow.png)

案例中加载“iris”数据集，运行**“筛图（Sieve Diagram）”**后，案例中控件的配置以及执行结果如下图所示。
![workflow-result](/img/aistudio/visualize/sieve-diagram/workflow-result.png)